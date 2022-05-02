import { InputProps, Input as ChakraInput } from '@chakra-ui/react';

const Input = ({ colorScheme = 'blackAlpha', ...props }: InputProps) => (
  <ChakraInput {...props} colorScheme={colorScheme} />
);

export default Input;
