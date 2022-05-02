import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Button } from '@hierfoods/components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
  header?: string | React.ReactNode;
  withCloseButton?: boolean;
  modalContentProps?: React.ComponentProps<typeof ModalContent>;
}

const Modal = ({
  isOpen,
  header,
  children,
  onClose,
  onConfirm,
  withCloseButton = false,
  modalContentProps,
}: ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...modalContentProps}>
        <ModalHeader p={0} mb="1.25rem">
          {header}
        </ModalHeader>
        {withCloseButton && <ModalCloseButton />}

        <ModalBody p={0} mt="1rem">
          {children}
        </ModalBody>

        <ModalFooter p={0} mb="2.75rem">
          <Button variant="ghost" mr="0.75rem" onClick={onClose}>
            Abbrechen
          </Button>
          <Button onClick={onConfirm}>Speichern</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
