import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

interface Props
  extends Pick<LinkProps, 'children' | 'as' | 'href' | 'color' | 'fontSize'> {}

const Link = ({ children, ...rest }: Props) => {
  return (
    // @ts-ignore - TS thinks we are trying to assert the type with "as"
    <ChakraLink {...rest}>{children}</ChakraLink>
  );
};

export default Link;
