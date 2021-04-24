import { ElementType, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { capitalize, get, isEmpty, omitBy, sortBy } from 'lodash';

import { Fab } from 'components/Button';
import { Chip } from 'components/Chip';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType, RowType, isSelectFieldType as isSelectType } from 'types';
import { sortByColumn, undefOrTrue } from 'utils';

import CollapsedRow from './CollapsedRow';
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
   * background component
   */
  component?: ElementType;
  /**
   * Props for container (e.g. sx)
   */
  containerProps?: TableContainerProps;
  /**
   * Delete mutation
   */
  deleteMutation?: (input: { [key: string]: unknown }) => void;
  /**
   * Mutation function
   */
  mutation?: (input: { [key: string]: unknown }) => void;
  /**
   * Read row/entity by id
   */
  readOne?: (input: { [key: string]: unknown }) => void;
  /**
   * table rows
   */
  rows: RowType[];
  /**
   * table size
   */
  size?: 'small' | 'medium';
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
 * Render chips
 */
const renderChips = (chips) => (
  <Box sx={{ mt: -0.5 }}>
    {(Array.isArray(chips) ? chips : [chips]).map((cell) => (
      <Chip key={cell.id || cell} name={cell} {...cell} />
    ))}
  </Box>
);

/**
 * Render cell by type
 */
const renderCellType = (value, column) => {
  if (Array.isArray(value) || isSelectType(column.type)) {
    return renderChips(value);
  }

  return column.type === 'main' ? (
    <Typography variant="h5" sx={{ whiteSpace: 'nowrap' }}>
      {value}
    </Typography>
  ) : (
    value
  );
};

// get column associated with cell
const getCellColumn = (columns, rowId) =>
  columns.find((col) => col.id.split('.')[0] === rowId);

// semi-ugly way of grabbing string representation of
// a cell value that is an object.
const getCellValue = (column, value) =>
  column && column.id.includes('.')
    ? get(value, column.id.split('.')[1])
    : value;

/**
 * Render cells.
 */
const renderCell = ({ id, value }, columns, goTo) => {
  const column = getCellColumn(columns, id);

  return (
    <TableCell key={id} onClick={goTo} scope="row">
      {renderCellType(getCellValue(column, value), column || {})}
    </TableCell>
  );
};

/**
 * Sort & omit based on columns.
 */
const processRow = (row, cols) => {
  const myRow = omitBy(
    row,
    (_, key) =>
      !cols.some(
        ({ id, type }) => id.split('.')[0] === key || type === 'TABLE',
      ),
  );

  return sortByColumn(myRow, cols);
};

/**
 * Render rows and add edit/delete buttons
 */
const renderRows = (
  rows,
  cols,
  allCols,
  read,
  mutation,
  deleteMutation,
  goTo,
) =>
  rows.map((row) => [
    <TableRow
      hover={Boolean(row.url)}
      key={row.id}
      sx={row.url ? { cursor: 'pointer' } : undefined}>
      {processRow(row, cols).map(([id, value]) =>
        renderCell(
          { id, value },
          cols,
          row.url ? () => goTo(row.url) : undefined,
        ),
      )}
      {mutation && deleteMutation && (
        <TableCell scope="row" sx={{ width: '1px' }}>
          <EditCell
            columns={allCols}
            del={() => deleteMutation({ variables: { input: { id: row.id } } })}
            mutation={mutation}
            read={() =>
              read ? read({ variables: { input: { id: row.id } } }) : {}
            }
            values={row}
          />
        </TableCell>
      )}
    </TableRow>,
    ...allCols
      .filter(({ type }) => type === 'TABLE')
      .map(({ id }) => <CollapsedRow open rows={row[id]} />),
  ]);

/**
 * A table with column sorting and other features
 */
const Table = ({
  allowAdds,
  columns,
  component,
  containerProps,
  deleteMutation,
  mutation,
  readOne,
  rows,
  ...props
}: TableProps): ReactElement => {
  const cols = sortBy(columns || getColumns(rows), 'listOrder');
  const showCols = cols.filter((col) => !col.editOnly && col.type !== 'TABLE');
  const history = useHistory();
  const goTo = (url) => history.push(url);

  return (
    <TableContainer {...containerProps} component={component || Paper}>
      <MaterialTable aria-label="simple table" {...props}>
        <TableHead>
          <TableRow>
            {showCols.map(({ id, name }) => (
              <TableCell key={id}>{name}</TableCell>
            ))}
            {mutation && deleteMutation && <TableCell id="edit" />}
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows(
            rows,
            showCols,
            cols,
            readOne,
            mutation,
            deleteMutation,
            goTo,
          )}
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
