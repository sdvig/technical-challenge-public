import {
  Alert as ChakraAlert,
  AlertIcon,
  CloseButton,
  AlertProps,
} from '@chakra-ui/react';

interface Props extends Pick<AlertProps, 'status' | 'children'> {
  onClose: () => void;
}

const Alert = ({ children, status, onClose }: Props) => {
  return (
    <ChakraAlert status={status} borderRadius="md">
      <AlertIcon />
      {children}
      <CloseButton
        position="absolute"
        right="0.5rem"
        top="0.5rem"
        onClick={onClose}
      />
    </ChakraAlert>
  );
};

export default Alert;
