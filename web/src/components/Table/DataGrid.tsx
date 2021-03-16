import { ReactElement, useState } from 'react';
import {
  GridApi,
  GridCellParams,
  DataGrid as MaterialDataGrid,
  GridColDef,
  GridColTypeDef,
} from '@material-ui/data-grid';
import { Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { Fab, IconButton } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { undefOrTrue } from 'utils';

export interface DataGridProps {
  /**
   * allow adding
   */
  allowAdds?: boolean;
  /**
   * add column for edit
   */
  allowEdits?: boolean;
  /**
   * table cols
   */
  columns: Array<{
    create?: boolean;
    id: string;
    flex?: number | null;
    name: string;
    options?: Array<{ id: string | number; name: string }>;
    type?:
      | 'element'
      | 'date'
      | 'dateTime'
      | 'number'
      | 'multiple'
      | 'string'
      | 'text';
    update?: boolean;
  }>;
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
  rows: Array<{ [key: string]: string | number | Date }>;
}

const getFlex = (type): number | undefined => {
  switch (type) {
    case 'text':
      return 1;
    case 'number':
      return undefined;
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

const formatColumns = (columns, mutation, deleteMutation): GridColDef[] => [
  ...columns.map(({ id, name, type }) => ({
    field: id,
    flex: getFlex(type),
    headerName: name,
    type: ['text', 'select'].includes(type) ? 'string' : type,
    width: type === 'number' ? 100 : undefined,
    ...(type === 'multiple' ? multiple : {}),
  })),
  {
    field: '',
    headerName: '',
    disableClickEventBubbling: true,
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) => {
      const { api }: { api: GridApi } = params;
      const id: number = params.getValue('id') as number;

      const del = () => {
        deleteMutation({ variables: { input: { id } } });
      };

      return (
        <Box display="flex">
          <Dialog
            openButton={<IconButton label="Edit" size="small" />}
            fields={columns.filter((c) => undefOrTrue(c.create))}
            ml="auto"
            onSubmit={mutation}
            title="Edit"
            values={api.getRowFromId(id)}
          />
          <IconButton
            icon={<DeleteIcon />}
            label="Delete"
            onClick={del}
            size="small"
          />
        </Box>
      );
    },
    width: 100,
  },
];

/**
 * A table with column sorting and other features
 */
const DataGrid = ({
  allowAdds,
  allowEdits,
  columns,
  deleteMutation,
  mutation,
  rows,
  ...props
}: DataGridProps): ReactElement => {
  const [editRow, setEditRow] = useState(null);

  return (
    <div>
      <Box mb={3}>
        {rows && (
          <MaterialDataGrid
            {...props}
            autoHeight
            columns={formatColumns(columns, mutation, deleteMutation)}
            onRowSelected={
              allowEdits
                ? ({ data }) =>
                    setEditRow(!editRow || editRow.id !== data.id ? data : null)
                : undefined
            }
            rows={rows}
          />
        )}
      </Box>
      {allowAdds && (
        <Dialog
          fields={columns.filter((c) => undefOrTrue(c.create))}
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
