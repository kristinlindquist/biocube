import { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { IconButton } from 'components/Button';
import { FormDialog as Dialog } from 'components/Dialog';
import { ColumnType } from 'types';
import { undefOrTrue } from 'utils';

export interface EditCellProps {
  /**
   * table cols
   */
  columns: ColumnType[];
  /**
   * Delete function
   */
  del?: () => void;
  /**
   * Mutation function
   */
  mutation?: (input: { [key: string]: unknown }) => void;
  /**
   * Values for modal
   */
  values?: { [key: string]: string | number | Date };
}

const EditCell = ({
  columns,
  del,
  mutation,
  values,
}: EditCellProps): ReactElement => (
  <Box display="flex">
    <Dialog
      openButton={<IconButton label="Edit" size="small" />}
      fields={columns.filter((c) => undefOrTrue(c.create))}
      ml="auto"
      onSubmit={mutation}
      title="Edit"
      values={values}
    />
    <IconButton
      icon={<DeleteIcon />}
      label="Delete"
      onClick={del}
      size="small"
    />
  </Box>
);

export default EditCell;
