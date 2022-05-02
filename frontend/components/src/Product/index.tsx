import {
  Text,
  Flex,
  Box,
  useBreakpointValue,
  useToken,
  ComponentWithAs,
  IconProps,
  useMediaQuery,
} from "@chakra-ui/react";
import { Amount } from "@hierfoods/components";
import { DeleteIcon, CloseIcon } from "@chakra-ui/icons";

import UneditableAmount from "../UneditableAmount";

export interface ProductProps {
  title: string;
  secondaryTitle?: string;
  singleUnit?: string;
  sku?: string;
  ean: string;
  amountEditable?: boolean;
  amount?: number;
  onAmountChange?: (amount: number, id: string) => void;
  onDelete?: () => void;
  removable?: boolean;
  amountHidden?: boolean;
  bulkUnit?: string;
  bulkAmount?: number;
  supplierArticleId?: string;
  productId: string;
}

const Product = ({
  title,
  singleUnit,
  sku,
  ean,
  secondaryTitle,
  amount = 0,
  amountEditable,
  onAmountChange,
  onDelete,
  removable,
  amountHidden,
  bulkUnit,
  bulkAmount,
  supplierArticleId,
  productId,
}: ProductProps) => {
  const IconComponent = useBreakpointValue(
    {
      base: DeleteIcon,
      md: CloseIcon,
    },
    "base"
  ) as ComponentWithAs<"svg", IconProps>;
  // Setting the color as a string to be resolved by chakra doesn't work, probably a bug
  const [gray500] = useToken("colors", ["gray.500"]);
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  const _renderAmount = () =>
    amountEditable ? (
      <Amount
        id={productId}
        defaultValue={amount}
        onValueChange={onAmountChange}
      />
    ) : (
      <UneditableAmount amount={amount} />
    );

  const _renderUnit = () => {
    return bulkUnit ? (
      <>
        <Text as="span" fontWeight="bold">{`${bulkUnit} `}</Text>
        <Text as="span">{`(${bulkAmount} x ${singleUnit})`}</Text>
      </>
    ) : (
      <Text>{singleUnit}</Text>
    );
  };

  return (
    <Flex
      flex="1"
      pt={!isDesktop && amountHidden ? "0" : "1rem"}
      pb={!isDesktop && amountHidden ? "0" : "1rem"}
      alignItems={{
        base: "flex-start",
        md: "center",
      }}
      data-testid={"product"}
    >
      {!amountHidden && _renderAmount()}

      <Box
        flex={1}
        ml={!isDesktop && amountHidden ? "0" : "1rem"}
        display="flex"
        justifyContent="space-between"
        alignItems={{
          base: "flex-start",
          md: "center",
        }}
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <Text
          fontSize={{
            base: "sm",
            md: "lg",
          }}
          color={amount === 0 ? "gray.500" : "gray.900"}
          fontWeight={{
            base: "400",
            md: "800",
          }}
        >
          <b aria-disabled={amount === 0} data-testid="title">
            {title}
          </b>
          {secondaryTitle && ` ${secondaryTitle} (${supplierArticleId})`}
        </Text>
        {singleUnit && (
          <Box
            fontSize={{
              base: "xs",
              md: "md",
            }}
            color="gray.500"
          >
            {_renderUnit()}
          </Box>
        )}
        <Text
          fontSize={{
            base: "xs",
            md: "md",
          }}
          color="gray.500"
        >
          {sku && `SKU: ${sku}`}
          {sku && ean && ", "}
          {ean && `EAN: ${ean}`}
        </Text>
      </Box>
      {onDelete && removable && (
        <Box
          cursor={"pointer"}
          mt={{
            base: ".1875rem",
            md: "0rem",
          }}
          ml={{
            base: "0rem",
            md: "2.5rem",
          }}
          lineHeight=".9375rem"
        >
          <IconComponent
            focusable="true"
            color={gray500}
            boxSize={".8125rem"}
            onClick={onDelete}
          />
        </Box>
      )}
    </Flex>
  );
};

export default Product;
