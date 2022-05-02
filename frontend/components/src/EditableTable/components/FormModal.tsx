import { Flex } from '@chakra-ui/react';
import set from 'lodash/set';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { Button, Heading, Icon, Modal } from '@hierfoods/components';
import { EditableTableHeaders } from '..';
import FormItem from './FormItem';

interface FormModalProps<T> {
  onConfirm: () => void;
  onDeletePress: () => void;
  onClose: () => void;
  editedRow: T | null;
  modalState: null | 'edit' | 'add';
  headers: EditableTableHeaders<T>;
  title: string;
  formState: T;
  setFormState: (formState: T) => void;
}
const FormModal = <T extends object>({
  onConfirm,
  onDeletePress,
  onClose,
  editedRow,
  modalState,
  headers,
  title,
  setFormState,
  formState,
}: FormModalProps<T>) => {
  return (
    <Modal
      isOpen={!!modalState}
      onClose={onClose}
      onConfirm={onConfirm}
      header={
        <>
          <Flex flexDirection="row" justifyContent="space-between">
            <Heading as="h2" size="xl">
              {title}
            </Heading>
            {modalState === 'edit' && editedRow && (
              <Button
                variant="outline"
                leftIcon={<Icon iconName="trash" width="0.75rem" />}
                onClick={onDeletePress}
              >
                Löschen
              </Button>
            )}
          </Flex>
        </>
      }
      modalContentProps={{
        minWidth: ['100%', '80%', '50%', '40%'],
        minHeight: '100%',
        mb: 0,
        mt: 0,
        ml: 'auto',
        pt: '4rem',
        pl: '3rem',
        pr: '3rem',
      }}
    >
      {headers.map(({ title, accessor, readonly, placeholder }) => {
        const value = get(formState, accessor);
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.currentTarget;
          const nextFormState = cloneDeep(formState);
          setFormState(set<T>(nextFormState, accessor, value));
        };

        if (readonly && modalState === 'add') return null;

        return (
          <FormItem
            key={accessor}
            title={title}
            accessor={accessor}
            readonly={readonly}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        );
      })}
    </Modal>
  );
};

export default FormModal;
