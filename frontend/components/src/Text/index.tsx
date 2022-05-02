import { Text as ChakraText, TextProps } from '@chakra-ui/react';

interface Props extends Pick<TextProps, 'children' | 'fontSize'> {}

const Text = ({ children, ...rest }: Props) => {
  return <ChakraText children={children} {...rest}></ChakraText>;
};

export default Text;
