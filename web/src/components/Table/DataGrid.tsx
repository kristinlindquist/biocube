import { ReactElement, useState } from 'react';
import {
  DataGrid as MaterialDataGrid,
  GridColDef,
  GridColTypeDef,
} from '@material-ui/data-grid';
import { Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { Fab } from 'components/Button';
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
    (value as Array<{ name: string }>).map(({ name }) => name).join(', '),
};

const formatColumns = (columns): GridColDef[] =>
  columns.map(({ id, name, type }) => ({
    field: id,
    flex: getFlex(type),
    headerName: name,
    type: ['text', 'select'].includes(type) ? 'string' : type,
    width: type === 'number' ? 100 : undefined,
    ...(type === 'multiple' ? multiple : {}),
  }));

/**
 * A table with column sorting and other features
 */
const DataGrid = ({
  allowAdds,
  allowEdits,
  columns,
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
            columns={formatColumns(columns)}
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
      {(allowAdds || editRow) && (
        <Dialog
          fields={columns.filter(
            (c) => (editRow && undefOrTrue(c.update)) || undefOrTrue(c.create),
          )}
          ml="auto"
          onSubmit={mutation}
          openButton={
            editRow ? <Fab icon={<EditIcon />} label="edit" /> : <Fab />
          }
          title={editRow ? 'Edit' : 'Add'}
          values={editRow || undefined}
        />
      )}
    </div>
  );
};

export default DataGrid;
