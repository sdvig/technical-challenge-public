import {
  IconButton,
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import get from 'lodash/get';
import React from 'react';

export type TableHeader<T> = {
  /**
   * The Title of our column
   */
  title: string;
  /**
   * If the data should be displayed in bold
   */
  bold?: boolean;
  /**
   * By which key the data should be accessed
   * can be something like 'contact.name.first' or just 'id'
   */
  accessor: string;
  /**
   * Hides selected column in the table, but this field still will be edittable
   */
  hidden?: boolean;
  /**
   * Custom renderer function to override the default rendering
   */
  renderer?: (cell: T[keyof T]) => JSX.Element;
};

export type TableHeaders<T> = TableHeader<T>[];

type ActionButton<T> = {
  /**
   * Icon Component
   */
  icon: React.ReactElement;
  /**
   * The label to be used for hovering / accessibility
   */
  label: string;
  /**
   * OnClick handler for the button
   */
  onClick: (row: T) => void;
};

export interface TableProps<T> {
  /**
   * The data to be displayed in the table
   * should be an array of objects
   */
  data: T[];
  /**
   * The headers to be displayed in the table
   * should be an array of TableHeader objects
   */
  headers: TableHeaders<T>;
  /**
   * Optional Actionbuttons to render at the end of each row
   */
  actionButtons?: ActionButton<T>[];
  /**
   * Optional function to be called when a row is clicked
   */
  onRowClick?: (row: T) => void;
}

/**
 * Renders the header of the table
 */
const _renderHeaders = <T,>(headers: TableHeaders<T>) => (
  <Thead>
    <Tr>
      {headers.map((header, index) => (
        <Th
          pl={0}
          pr="0.75rem"
          key={`th-${header.accessor as string}-${index}`}
          color="gray.500"
          fontSize="0.875rem"
          fontWeight="normal"
          textTransform="none"
          letterSpacing={0}
        >
          {header.title}
        </Th>
      ))}
    </Tr>
  </Thead>
);

/**
 * Renders a cell based on the header and the row
 */
const _renderCell = <T,>(
  { accessor, renderer, bold }: TableHeader<T>,
  row: T,
  rowIndex: number,
  disablePaddingRight: boolean
) => {
  const data = get(row, accessor);
  return (
    <Td
      pl={0}
      pr={disablePaddingRight ? 0 : '0.75rem'}
      key={`cell-${accessor as string}-${rowIndex}`}
      fontWeight={bold ? 'bold' : 'normal'}
      fontSize="0.875rem"
      color="gray.800"
    >
      {renderer?.(data) ?? data}
    </Td>
  );
};

/**
 * Renders the action buttons at the end of each row
 */
const _renderActionButtons = <T,>(
  actionButtons: ActionButton<T>[],
  row: T,
  rowIndex: number
) => {
  return (
    <Td pl={0} pr={0}>
      {actionButtons.map((button, index) => {
        const onClick = (e: React.MouseEvent) => {
          e.stopPropagation();
          button.onClick(row);
        };
        return (
          <IconButton
            key={`actionbuttons-${rowIndex}-${index}`}
            aria-label={button.label}
            variant="outline"
            icon={button.icon}
            onClick={onClick}
          />
        );
      })}
    </Td>
  );
};

/**
 * Renders the rows of the table with actual data
 */
const _renderRows = <T,>(
  data: T[],
  headers: TableHeaders<T>,
  onRowClick?: (row: T) => void,
  actionButtons?: ActionButton<T>[]
) => {
  return (
    <Tbody>
      {data.map((row, rowIndex) => {
        const onClick = () => {
          if (onRowClick) onRowClick(row);
        };
        return (
          <Tr key={`tr-${rowIndex}`} onClick={onClick}>
            {headers.map((header, colIndex) =>
              _renderCell<T>(
                header,
                row,
                rowIndex,
                !actionButtons && colIndex === headers.length - 1
              )
            )}
            {actionButtons &&
              _renderActionButtons<T>(actionButtons, row, rowIndex)}
          </Tr>
        );
      })}
    </Tbody>
  );
};

const Table = <T,>({
  data,
  headers,
  onRowClick,
  actionButtons,
}: TableProps<T>) => {
  const filteredHeaders = headers.filter((header) => !header.hidden);
  return (
    <ChakraTable variant="unstyled">
      {_renderHeaders<T>(filteredHeaders)}
      {_renderRows<T>(data, filteredHeaders, onRowClick, actionButtons)}
    </ChakraTable>
  );
};

export default Table;
