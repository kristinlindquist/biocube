import { ReactElement } from 'react';
import { Box, Collapse, TableCell, TableRow } from '@material-ui/core';

import { Table } from 'components/Table';
import { RowType } from 'types';

export interface CollapsedRowProps {
  colSpan?: number;
  open?: boolean;
  /**
   * rows
   */
  rows: RowType[];
}

const CollapsedRow = ({
  colSpan = 6,
  open,
  rows,
}: CollapsedRowProps): ReactElement => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={colSpan}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box margin={1}>
          <Table component="div" rows={rows} size="small" />
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
);

export default CollapsedRow;
