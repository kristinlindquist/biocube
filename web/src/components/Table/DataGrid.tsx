import { ReactElement } from 'react';
import {
  GridCellParams,
  DataGrid as MaterialDataGrid,
  GridColDef,
  GridColTypeDef,
} from '@material-ui/data-grid';
import { Box, Chip } from '@material-ui/core';
import { capitalize, isEmpty, orderBy } from 'lodash';

import { Fab } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType, RowType, isSelectFieldType as isSelectType } from 'types';
import { undefOrTrue } from 'utils';

import EditCell from './EditCell';

export interface DataGridProps {
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
   * hide footer
   */
  hideFooter?: boolean;
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
 * Handling an array / multi-select
 */
const multiple: GridColTypeDef = {
  type: 'string',
  valueFormatter: ({ value }) =>
    ((value as Array<{ name: string }>) || [])
      .map(({ name }) => name)
      .join(', '),
};

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
 * Get length of a cell, incl. if array
 */
const getCellLength = (cell) =>
  ((Array.isArray(cell) ? cell.map((c) => c.name).join('') : cell) || '')
    .length;

/**
 * Get max length of cells for column
 */
const getMaxLength = (colName, colId, rows) => {
  const charSize = 10;
  const row = rows.reduce((a, b) =>
    getCellLength(a[colId]) > getCellLength(b[colId]) ? a : b,
  );
  const cell = row[colId];
  return Math.min(Math.max(colName.length, getCellLength(cell)), 25) * charSize;
};

/**
 * Render special cells, so far just chips for selects.
 */
const renderCell = (colId, colType) => {
  return ({ api, id }: GridCellParams) => {
    const cell = api.getRowFromId(id)[colId];
    return isSelectType(colType)
      ? (Array.isArray(cell) ? cell : [{ name: cell }]).map(({ name }) => (
          <Chip
            key={`${id}-${name}`}
            label={name}
            size="small"
            sx={{ mr: 0.5 }}
          />
        ))
      : undefined;
  };
};

/**
 * Turn into the columns expected by DataGrid and add an Edit column.
 */
const formatColumns = (columns, rows, mutation, deleteMutation): GridColDef[] =>
  [
    ...columns.map(({ id, name, type, width }) => ({
      field: id,
      flex: type === 'text' ? 1 : undefined,
      headerName: name,
      renderCell: renderCell(id, type),
      width: width || getMaxLength(name, id, rows),
      ...(type === 'multiple' ? multiple : {}),
    })),
    mutation && deleteMutation
      ? {
          field: '',
          headerName: '',
          disableClickEventBubbling: true,
          disableColumnMenu: true,
          renderCell: ({ api, id }: GridCellParams) => (
            <EditCell
              columns={columns}
              del={() => deleteMutation({ variables: { input: { id } } })}
              mutation={mutation}
              values={api.getRowFromId(id)}
            />
          ),
          width: 100,
        }
      : null,
  ].filter((c) => c);

/**
 * A table with column sorting and other features
 */
const DataGrid = ({
  allowAdds,
  columns,
  deleteMutation,
  mutation,
  rows,
  ...props
}: DataGridProps): ReactElement => {
  const myCols = orderBy(columns || getColumns(rows), 'listOrder');
  // for MUI DataGrid bug
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Backspace') {
        e.stopPropagation();
      }
    },
    true,
  );

  return (
    <div>
      <Box mb={3}>
        {rows && (
          <MaterialDataGrid
            {...props}
            autoHeight
            columns={formatColumns(myCols, rows, mutation, deleteMutation)}
            rows={rows}
          />
        )}
      </Box>
      {allowAdds && mutation && (
        <Dialog
          containerProps={{ sx: { ml: 'auto' } }}
          fields={myCols.filter((c) => undefOrTrue(c.create))}
          openButton={<Fab />}
          onSubmit={(input) => mutation(input)}
          title="Add"
        />
      )}
    </div>
  );
};

export default DataGrid;
