import { ReactElement } from 'react';
import {
  DataGrid as MaterialDataGrid,
  GridColDef,
} from '@material-ui/data-grid';
import { Box } from '@material-ui/core';

import { FormDialog as Dialog } from 'components/Dialog';
import { Fab } from 'components/Button';

export interface DataGridProps {
  /**
   * allow adding
   */
  allowAdds?: boolean;
  /**
   * table cols
   */
  columns: Array<{
    id: string;
    flex?: number | null;
    name: string;
    options?: Array<{ id: string | number; name: string }>;
    type?: 'date' | 'dateTime' | 'number' | 'multiple' | 'string' | 'text';
  }>;
  /**
   * hide footer
   */
  hideFooter?: boolean;
  /**
   * mutation function
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

const formatColumns = (columns): GridColDef[] =>
  columns.map(({ id, name, type }) => ({
    field: id,
    flex: getFlex(type),
    headerName: name,
    type: ['text', 'select'].includes(type) ? 'string' : type,
    width: type === 'number' ? 100 : undefined,
  }));

const noEditColumns = ['id'];

/**
 * A data grid
 */
const DataGrid = ({
  allowAdds,
  columns,
  mutation,
  rows,
  ...props
}: DataGridProps): ReactElement => (
  <div>
    <Box mb={3}>
      <MaterialDataGrid
        autoHeight
        {...props}
        rows={rows || []}
        columns={formatColumns(columns)}
      />
    </Box>
    {allowAdds && (
      <Box display="flex">
        <Dialog
          mutation={mutation}
          fields={columns
            .filter((c) => !noEditColumns.includes(c.id as string))
            .map((f) => ({ ...f, id: f.id.split('.')[0] }))}
          ml="auto"
          openButton={Fab}
          title="a title"
        />
      </Box>
    )}
  </div>
);

export default DataGrid;
