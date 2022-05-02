import {
  Box,
  useMediaQuery,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Badge,
  Button,
  CtaContainer,
  Heading,
  Page,
  Product,
  Text,
} from "@hierfoods/components";
import { useRef } from "react";
import type { Order, Product as ProductType } from "../../types";
import { useNavigate } from "react-router-dom";

interface ViewProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  order: Order;
  productList: Record<string, ProductType>;
  onAmountChange: (amount: number, id: string) => void;
  isAmountChanged: () => boolean;
}

export const View = ({
  isModalOpen,
  toggleModal,
  order,
  productList,
  onAmountChange,
  isAmountChanged,
}: ViewProps) => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const cancelRef = useRef().current;
  const navigate = useNavigate();

  const _renderModal = () => {
    return (
      <AlertDialog
        variant={"solid"}
        isOpen={isModalOpen}
        onClose={toggleModal}
        isCentered
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent ml="1.8125rem" mr="1.8125rem">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Heading size="sm">Confirm Delivery?</Heading>
            </AlertDialogHeader>

            <AlertDialogBody>
              By confirming you will let {`${order.buyerName}`} know that the
              order is confirmed.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={toggleModal} variant={"ghost"} ref={cancelRef}>
                Cancel
              </Button>
              <Box ml={".75rem"}>
                <Button
                  aria-label="confirm"
                  onClick={() => navigate("/order/123/delivery")}
                  variant={"solid"}
                >
                  Confirm
                </Button>
              </Box>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  };

  return (
    <>
      <Page>
        <Box mb={"1.25rem"}>
          <Badge bg={"orange"} color={"white"}>
            Pending
          </Badge>
        </Box>
        <Box mb={"1.25rem"}>
          <Heading as="h1" size="lg">
            Confirm delivery for {order.buyerName}
          </Heading>
        </Box>
        <Box mb={"1.25rem"}>
          <Text>#{order.orderNumber}</Text>
        </Box>
        {Object.keys(productList).map((key) => {
          const product = productList[key];

          return (
            <Box key={product.productId} mb={"1.25rem"}>
              <Product
                onAmountChange={onAmountChange}
                {...product}
                amountEditable
              ></Product>
            </Box>
          );
        })}
      </Page>
      <CtaContainer>
        <Button
          isDisabled={isAmountChanged()}
          onClick={toggleModal}
          isFullWidth={isMobile}
          size={"lg"}
          variant={"solid"}
        >
          Confirm
        </Button>
      </CtaContainer>
      {_renderModal()}
    </>
  );
};
