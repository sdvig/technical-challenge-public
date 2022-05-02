import { Box } from "@chakra-ui/react";
import { Badge, Heading, Page, Product, Text } from "@hierfoods/components";
import type { Order, Product as ProductType } from "../../types";

interface ViewProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  order: Order;
  productList: ProductType[];
}

export const View = ({ order }: ViewProps) => {
  return (
    <>
      <Page>
        <Box mb={"1.25rem"}>
          <Badge bg={"green"} color={"white"}>
            Confirmed
          </Badge>
        </Box>
        <Box mb={"1.25rem"}>
          <Heading as="h1" size="lg">
            Delivery slip for {order.buyerName}
          </Heading>
        </Box>

        <Box mb={"1.25rem"}>
          <Text>#{order.orderNumber}</Text>
        </Box>
        {Object.keys(order.productList).map((key) => {
          const product = order.productList[key];

          return (
            <Box key={product.productId} mb={"1.25rem"}>
              <Product {...product}></Product>
            </Box>
          );
        })}
      </Page>
    </>
  );
};
