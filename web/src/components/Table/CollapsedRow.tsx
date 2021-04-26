import { ReactElement } from 'react';
import {
  Box,
  Collapse,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

import { Table } from 'components/Table';
import { RowType } from 'types';

export interface CollapsedRowProps {
  colSpan?: number;
  name?: string;
  open?: boolean;
  /**
   * rows
   */
  rows: RowType[];
}

const CollapsedRow = ({
  colSpan = 6,
  name,
  open,
  rows,
}: CollapsedRowProps): ReactElement => (
  <TableRow>
    <TableCell colSpan={colSpan} sx={{ py: 0 }}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box margin={2}>
          {name && <Typography variant="h5">{name}</Typography>}
          <Table component="div" rows={rows} size="small" />
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
);

export default CollapsedRow;
