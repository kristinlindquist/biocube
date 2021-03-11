import { ReactElement } from 'react';
import {
  DataGrid as MaterialDataGrid,
  GridColDef,
} from '@material-ui/data-grid';

export interface DataGridProps {
  /**
   * table cols
   */
  columns: Array<{
    id: string | number;
    flex?: number | null;
    name: string;
    type?: 'string' | 'number' | 'date' | 'dateTime' | 'text' | null;
  }>;
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
    type: type === 'text' ? 'string' : type,
    width: type === 'number' ? 100 : undefined,
  }));

/**
 * A data grid
 */
const DataGrid = ({ columns, rows, ...props }: DataGridProps): ReactElement => (
  <MaterialDataGrid
    autoHeight
    {...props}
    rows={rows}
    columns={formatColumns(columns)}
  />
);

export default DataGrid;
