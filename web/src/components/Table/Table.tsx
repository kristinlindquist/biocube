import { ElementType, ReactElement } from 'react';
import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { isEmpty, sortBy, startCase } from 'lodash';

import { Fab } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType, IdType, RowType } from 'types';
import { undefOrTrue } from 'utils';

import Row from './Row';

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
   * Id for table (used for keys)
   */
  id?: IdType;
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
   * Mostly for storybook: shows edit/delete buttons
   */
  showEditOverride?: boolean;
  /**
   * table size
   */
  size?: 'small' | 'medium';
}

const useStyles = makeStyles(() => ({
  headerRow: {
    '& th': {
      textTransform: 'uppercase',
    },
  },
}));

/**
 * If no columns provided, make 'em up from the rows
 */
const getColumns = (rows: RowType[]): ColumnType[] =>
  !isEmpty(rows)
    ? Object.keys(rows[0])
        .filter((k) => !k.startsWith('_') && k !== 'key')
        .map((k) => ({
          create: k !== 'id',
          id: k,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          name: startCase(k.split('.').slice(-1) as any),
        }))
    : [];

/**
 * A table with linked rows, ability to add/edit, etc.
 */
const Table = ({
  allowAdds,
  columns,
  component,
  containerProps,
  deleteMutation,
  id = 'a table',
  mutation,
  readOne,
  rows,
  showEditOverride,
  ...props
}: TableProps): ReactElement => {
  const classes = useStyles();
  const cols = sortBy(columns || getColumns(rows), 'listOrder');
  const showCols = cols.filter((col) => !col.editOnly && col.type !== 'TABLE');
  const collapseCol = cols.find(({ type }) => type === 'TABLE');

  return (
    <TableContainer {...containerProps} component={component || Paper}>
      <MaterialTable aria-label={`table ${id}`} {...props}>
        <TableHead>
          <TableRow className={classes.headerRow}>
            {showCols.map(({ id: colId, name }) => (
              <TableCell key={colId}>{name}</TableCell>
            ))}
            {collapseCol && <TableCell id="collapseCol" />}
            {showEditOverride || (mutation && deleteMutation) ? (
              <TableCell id="edit" />
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              allCols={cols}
              collapseCol={collapseCol}
              cols={showCols}
              deleteMutation={deleteMutation}
              key={`${row.id || row.key}-${id}`}
              mutation={mutation}
              read={readOne}
              row={row}
              showEditOverride={showEditOverride}
            />
          ))}
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
