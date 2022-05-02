import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { Button, Heading, Icon, Table } from '@hierfoods/components';
import set from 'lodash/set';
import { useMemo, useState } from 'react';
import { TableHeader, TableProps } from '../Table';
import FormModal from './components/FormModal';

interface EditableTableHeader<T> extends TableHeader<T> {
  fieldType?: 'text'; // Will be expanded once we've got more field types
  /**
   * Sets field to be readonly, and does now allow to edit it
   */
  readonly?: boolean;
  placeholder?: string;
}

export type EditableTableHeaders<T> = EditableTableHeader<T>[];
interface EditableTableProps<T> extends TableProps<T> {
  textConfig: {
    title: string;
    addModeTitle: string;
    addButtonTitle: string;
    editModeTitle: string;
  };
  editOnClick?: boolean;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  headers: EditableTableHeaders<T>;

  /**
   * Gives you the previous and current data
   */
  onUpdate?: (before: T | null, after: T | null) => void;
  onAdd?: (added: T) => void;
  onEdit?: (edit: T) => void;
  onDelete?: (deleted: T) => void;
}

const EditableTable = <T extends object>({
  data,
  headers,
  actionButtons,
  editOnClick = true,
  showEditButton = true,
  showDeleteButton = true,
  onRowClick,
  onUpdate,
  onAdd,
  onEdit,
  onDelete,
  textConfig,
}: EditableTableProps<T>) => {
  // Map the headers to an initial form-state
  const initialFormState: T = useMemo(
    () =>
      headers.reduce((result, { accessor, fieldType }) => {
        const initialValue = (() => {
          // Add default-values for your different fieldTypes here, like:
          // if (fieldType === 'number') return 0;
          return '';
        })();
        return set<T>(result, accessor, initialValue);
      }, {} as T),
    [headers]
  );

  const [modalState, setModalState] = useState<null | 'edit' | 'add'>(null);
  const [formState, setFormState] = useState<T>(initialFormState);
  const [editedRow, setEditedRow] = useState<T | null>(null);

  const openAddModal = () => {
    setModalState('add');
    setFormState(initialFormState);
  };

  const openEditModal = (row: T) => {
    setModalState('edit');
    setEditedRow(row);
    setFormState(row);
  };

  const closeModal = () => {
    setModalState(null);
    setEditedRow(null);
  };

  const handleEdit = () => {
    if (modalState === 'edit') {
      if (onEdit) onEdit(formState);
      if (onUpdate) onUpdate(editedRow, formState);
    }
    if (modalState === 'add') {
      if (onAdd) onAdd(formState);
      if (onUpdate) onUpdate(null, formState);
    }
    closeModal();
  };

  const handleDelete = (row?: T) => {
    const deleted = row ?? editedRow;
    if (!deleted) return;
    if (onDelete) onDelete(deleted);
    if (onUpdate) onUpdate(deleted, null);
  };

  const handleRowClick = (row: T) => {
    // Propagate the Callback if it's defined
    if (onRowClick) onRowClick(row);
    // Open the editModal if the user clicks on the row
    if (editOnClick) openEditModal(row);
  };

  const extendedActionButtons: TableProps<T>['actionButtons'] = useMemo(() => {
    const calculatedActionButtons = actionButtons ? [...actionButtons] : [];
    if (showEditButton) {
      calculatedActionButtons.push({
        icon: <EditIcon />,
        label: 'Edit',
        onClick: openEditModal,
      });
    }
    if (showDeleteButton) {
      calculatedActionButtons.push({
        icon: <DeleteIcon />,
        label: 'Delete',
        onClick: handleDelete,
      });
    }
    return calculatedActionButtons;
  }, [actionButtons, showDeleteButton, showEditButton]);

  return (
    <>
      <Flex flexDirection="row" justifyContent="space-between" mb="2rem">
        <Heading>{textConfig.title}</Heading>
        <Button
          variant="outline"
          leftIcon={<Icon iconName="plus" />}
          onClick={openAddModal}
        >
          {textConfig.addButtonTitle}
        </Button>
      </Flex>
      <Table
        data={data}
        headers={headers}
        actionButtons={extendedActionButtons}
        onRowClick={handleRowClick}
      />
      <FormModal
        title={
          modalState === 'add'
            ? textConfig.addModeTitle
            : textConfig.editModeTitle
        }
        headers={headers}
        modalState={modalState}
        editedRow={editedRow}
        onConfirm={handleEdit}
        onDeletePress={handleDelete}
        onClose={closeModal}
        setFormState={setFormState}
        formState={formState}
      />
    </>
  );
};

export default EditableTable;
