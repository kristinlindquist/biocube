import { ReactElement } from 'react';
import {
  Chip,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { capitalize, isEmpty, omitBy, orderBy, sortBy } from 'lodash';

import { Fab } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType, RowType, isSelectFieldType as isSelectType } from 'types';
import { undefOrTrue } from 'utils';

import EditCell from './EditCell';

export interface TableProps {
  /**
   * allow adding
   */
  allowAdds?: boolean;
  /**
   * table cols
   */
  columns?: ColumnType[];
  /**
   * Delete mutation
   */
  deleteMutation?: (input: { [key: string]: unknown }) => void;
  /**
   * Mutation function
   */
  mutation?: (input: { [key: string]: unknown }) => void;
  /**
   * table rows
   */
  rows: RowType[];
}

/**
 * If no columns provided, make 'em up from the rows
 */
const getColumns = (rows: RowType[]): ColumnType[] =>
  !isEmpty(rows)
    ? Object.keys(rows[0])
        .filter((k) => !k.startsWith('_'))
        .map((k) => ({ create: k !== 'id', id: k, name: capitalize(k) }))
    : [];

/**
 * Render special cells, so far just chips for selects.
 */
const renderCell = (cell, columns) => {
  const column = columns.find((col) => col.id === cell.id);

  if (!column) {
    return null;
  }

  const val =
    Array.isArray(cell.value) || isSelectType(column.type)
      ? (Array.isArray(cell.value)
          ? cell.value
          : [{ name: cell.value }]
        ).map(({ id: cId, name }) => (
          <Chip
            key={`${cId}-${name}`}
            label={name}
            size="small"
            sx={{ mr: 0.5 }}
          />
        ))
      : cell.value;

  return (
    <TableCell key={cell.id} scope="row">
      {val}
    </TableCell>
  );
};

/**
 * Sort & omit based on columns.
 */
const processRow = (row, cols) => {
  const myRow = omitBy(row, (_, key) => !cols.some(({ id }) => id === key));
  return sortBy(
    Object.entries(myRow),
    ([id]) => (cols.find((c) => id === c.id) || {}).listOrder,
  );
};

/**
 * Render rows and add edit/delete buttons
 */
const renderRows = (rows, cols, mutation, deleteMutation) =>
  rows.map((row) => (
    <TableRow key={row.id}>
      {processRow(row, cols).map(([id, value]) =>
        renderCell({ id, value }, cols),
      )}
      <TableCell scope="row">
        <EditCell
          columns={cols}
          del={() => deleteMutation({ variables: { input: { id: row.id } } })}
          mutation={mutation}
          values={row}
        />
      </TableCell>
    </TableRow>
  ));

/**
 * A table with column sorting and other features
 */
const Table = ({
  allowAdds,
  columns,
  deleteMutation,
  mutation,
  rows,
}: TableProps): ReactElement => {
  const cols = orderBy(columns || getColumns(rows), 'listOrder');

  return (
    <TableContainer>
      <MaterialTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map(({ id, name }) => (
              <TableCell key={id}>{name}</TableCell>
            ))}
            <TableCell id="edit" />
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows(rows, cols, mutation, deleteMutation)}
        </TableBody>
      </MaterialTable>
      {allowAdds && mutation && (
        <Dialog
          containerProps={{ sx: { ml: 'auto' } }}
          fields={cols.filter((c) => undefOrTrue(c.create))}
          openButton={<Fab />}
          onSubmit={(input) => mutation(input)}
          title="Add"
        />
      )}
    </TableContainer>
  );
};

export default Table;
