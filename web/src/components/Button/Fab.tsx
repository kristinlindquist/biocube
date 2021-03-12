import React, { ReactElement } from 'react';
import { Fab as MaterialFab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface FabProps {
  /**
   * label
   */
  label: string | null;
}

const Fab = ({ label, ...props }: FabProps): ReactElement => {
  return (
    <MaterialFab color="primary" {...props} aria-label={label || 'add'}>
      <AddIcon />
    </MaterialFab>
  );
};

export default Fab;
