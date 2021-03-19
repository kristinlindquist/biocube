import { ReactElement } from 'react';
import {
  GridCellParams,
  DataGrid as MaterialDataGrid,
  GridColDef,
  GridColTypeDef,
} from '@material-ui/data-grid';
import { Box } from '@material-ui/core';
import { capitalize, isEmpty } from 'lodash';

import { Fab } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType, RowType } from 'types';
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

const getFlex = (type): number | undefined => {
  switch (type) {
    case 'text':
      return 1;
    case 'number':
      return undefined;
    case 'string':
      return 0.5;
    default:
      return 0.2;
  }
};

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
 * Turn into the columns expected by DataGrid and add an Edit column.
 */
const formatColumns = (columns, mutation, deleteMutation): GridColDef[] =>
  [
    ...columns.map(({ id, name, type }) => ({
      field: id,
      flex: getFlex(type),
      headerName: name,
      type: ['text', 'select'].includes(type) ? 'string' : type,
      width: type === 'number' ? 100 : undefined,
      ...(type === 'multiple' ? multiple : {}),
    })),
    mutation && deleteMutation
      ? {
          field: '',
          headerName: '',
          disableClickEventBubbling: true,
          disableColumnMenu: true,
          renderCell: (params: GridCellParams) => {
            const id: number = params.getValue('id') as number;

            return (
              <EditCell
                columns={columns}
                del={() => deleteMutation({ variables: { input: { id } } })}
                mutation={mutation}
                values={params.api.getRowFromId(id)}
              />
            );
          },
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
  const myCols = columns || getColumns(rows);

  return (
    <div>
      <Box mb={3}>
        {rows && (
          <MaterialDataGrid
            {...props}
            autoHeight
            columns={formatColumns(myCols, mutation, deleteMutation)}
            rows={rows}
          />
        )}
      </Box>
      {allowAdds && mutation && (
        <Dialog
          fields={myCols.filter((c) => undefOrTrue(c.create))}
          ml="auto"
          openButton={<Fab />}
          onSubmit={mutation}
          title="Add"
        />
      )}
    </div>
  );
};

export default DataGrid;
