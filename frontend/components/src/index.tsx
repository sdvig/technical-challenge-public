import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#dad7e9",
    200: "#bcb7d6",
    300: "#9e96c4",
    400: "#8076b1",
    500: "#4f467b",
    600: "#3a345a",
    700: "#25213a",
    800: "#100f19",
    900: "#000000",
  },
  purple: {
    400: "#dcdae5",
    800: "#4f467b",
  },
  beige: {
    100: "#f7f6f3",
  },
};

interface StyleOptions {
  colorScheme: string;
}

const theme = extendTheme({
  colors,
  components: {
    Button: {
      variants: {
        ghost: ({ colorScheme }: StyleOptions) => ({
          color: `${colorScheme}.800`,
        }),
        outline: ({ colorScheme }: StyleOptions) => ({
          color: `${colorScheme}.800`,
          borderColor: `${colorScheme}.200`,
        }),
        solid: ({ colorScheme }: StyleOptions) => ({
          color: "#FFF",
          background: `${colorScheme}.800`,
        }),
      },
    },
    Alert: {
      variants: {
        subtle: ({ colorScheme }: StyleOptions) => {
          return {
            container: {
              color: `${colorScheme}.500`,
            },
          };
        },
      },
    },
    List: {
      variants: {
        "with-separator": () => {
          return {
            item: {
              borderBottom: "0.125rem solid",
              borderColor: "gray.300",
            },
          };
        },
      },
    },
    Input: {
      variants: {
        outline: ({ colorScheme }: StyleOptions) => {
          return {
            field: {
              borderColor: `${colorScheme}.200`,
              borderWidth: "0.125rem",
              _hover: { borderColor: `${colorScheme}.800` },
            },
          };
        },
        filled: () => {
          return {
            field: {
              backgroundColor: `gray.100`,
            },
          };
        },
      },
    },
    Badge: {
      variants: {
        solid: ({ colorScheme }: StyleOptions) => {
          return {
            bg: `${colorScheme}.400`,
            color: `${colorScheme}.800`,
          };
        },
      },
    },
    Text: {
      baseStyle: {
        color: "gray.500",
        fontSize: "sm",
      },
    },
    Link: {
      baseStyle: {
        color: "blue.500",
        fontSize: "sm",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Inter",
  },
});

export { theme };
export { default as Alert } from "./Alert";
export { default as Amount } from "./Amount";
export { default as Badge } from "./Badge";
export { default as Button } from "./Button";
export { default as CtaContainer } from "./CtaContainer";
export { default as EditableTable } from "./EditableTable";
export { default as Heading } from "./Heading";
export * from "./Icon";
export { default as Input } from "./Input";
export { default as Page } from "./Layouts/Page";
export { default as PageWithSidebar } from "./Layouts/PageWithSidebar";
export { default as Link } from "./Link";
export { default as Logo } from "./Logo";
export { default as Modal } from "./Modal";
export { default as Navbar } from "./Navbar";
export { default as Product } from "./Product";
export { default as Sidebar } from "./Sidebar";
export { default as Table } from "./Table";
export type { TableHeaders } from "./Table";
export { default as Text } from "./Text";
export { default as UneditableAmount } from "./UneditableAmount";

export type { ProductProps } from "./Product";
