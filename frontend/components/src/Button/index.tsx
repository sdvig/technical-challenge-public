import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface Props extends Omit<ButtonProps, "ref"> {
  ref?: React.Ref<any>;
}

const Button = ({
  children,
  colorScheme = "blackAlpha",
  ...otherProps
}: Props) => {
  return (
    <ChakraButton {...otherProps} colorScheme={colorScheme}>
      {children}
    </ChakraButton>
  );
};

export default Button;
