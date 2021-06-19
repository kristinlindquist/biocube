import { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, TableCell, TableRow, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { get, omitBy } from 'lodash';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { IconButton } from 'components/Button';
import { Chip } from 'components/Chip';
import { ColumnType, RowType, isSelectFieldType as isSelectType } from 'types';
import { asArray, sortByColumn } from 'utils';

import CollapsedRow from './CollapsedRow';
import EditCell from './EditCell';

export interface RowProps {
  /**
   * All columns, even those not showing
   */
  allCols: ColumnType[];
  /**
   * Column definition for collapsible content
   */
  collapseCol: ColumnType;
  /**
   * Columns that are showing
   */
  cols: ColumnType[];
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
  read?: (input: { [key: string]: unknown }) => void;
  /**
   * The row
   */
  row: RowType;
  /**
   * Mostly for storybook: shows edit/delete buttons
   */
  showEditOverride?: boolean;
}

const useStyles = makeStyles({
  opened: {
    '& > td': {
      borderBottom: 'unset',
    },
  },
});

/**
 * Render chips
 */
const renderChips = (chips) => (
  <Box sx={{ mt: -0.5 }}>
    {asArray(chips)
      .map((cell) =>
        typeof cell === 'string' ? { id: cell, name: cell } : cell,
      )
      .map((cell) => (
        <Chip key={cell.id} {...cell} />
      ))}
  </Box>
);

/**
 * Render cell by type
 */
const renderCellType = (value, column) => {
  if (value && (Array.isArray(value) || isSelectType(column.type))) {
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
        ({ id, type }) =>
          id.split('.')[0] === key || id === key || type === 'TABLE',
      ),
  );

  return sortByColumn(myRow, cols);
};

/**
 * Rows with add edit/delete buttons & expandable section
 */
const Row = ({
  allCols,
  collapseCol,
  cols,
  deleteMutation,
  mutation,
  read,
  row,
  showEditOverride,
}: RowProps): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { id, url } = row;
  const history = useHistory();
  const onClick = url ? () => history.push(url) : undefined;

  return (
    <>
      <TableRow
        className={open ? classes.opened : ''}
        hover={Boolean(url)}
        sx={url ? { cursor: 'pointer' } : undefined}>
        {processRow(row, cols).map(([cellId, cellValue]) =>
          renderCell({ id: cellId, value: cellValue }, cols, onClick),
        )}
        {collapseCol && (
          <TableCell scope="row" sx={{ width: '1px' }}>
            <IconButton
              icon={open ? <ArrowUpIcon /> : <ArrowDownIcon />}
              onClick={() => setOpen(!open)}
            />
          </TableCell>
        )}
        {showEditOverride || (mutation && deleteMutation) ? (
          <TableCell scope="row" sx={{ width: '1px' }}>
            <EditCell
              columns={allCols}
              del={() => deleteMutation({ variables: { input: { id } } })}
              mutation={mutation}
              read={() => (read ? read({ variables: { input: { id } } }) : {})}
              values={row}
            />
          </TableCell>
        ) : null}
      </TableRow>
      {collapseCol && (
        <CollapsedRow
          open={open}
          name={collapseCol.name}
          rows={row[collapseCol.id] as RowType[]}
        />
      )}
    </>
  );
};

export default Row;
