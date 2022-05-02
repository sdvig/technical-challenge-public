import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

interface Props
  extends Pick<
    HeadingProps,
    'as' | 'color' | 'children' | 'size' | 'fontSize'
  > {}

const Heading = ({ children, ...rest }: Props) => {
  return (
    // @ts-ignore - TS thinks we are trying to assert the type with "as"
    <ChakraHeading {...rest}>{children}</ChakraHeading>
  );
};

export default Heading;
