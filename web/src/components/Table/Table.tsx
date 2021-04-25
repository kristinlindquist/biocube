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
import { capitalize, isEmpty, sortBy } from 'lodash';

import { Fab } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType, RowType } from 'types';
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
          {rows.map((row) => (
            <Row
              allCols={cols}
              cols={showCols}
              deleteMutation={deleteMutation}
              key={row.id}
              mutation={mutation}
              read={readOne}
              row={row}
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
