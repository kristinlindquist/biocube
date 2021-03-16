import { ReactElement } from 'react';
import { Fab as MaterialFab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface FabProps {
  /**
   * icon
   */
  icon?: ReactElement;
  /**
   * label
   */
  label?: string;
}

const Fab = ({ icon, label = 'add', ...props }: FabProps): ReactElement => {
  return (
    <MaterialFab color="primary" {...props} aria-label={label}>
      {icon || <AddIcon />}
    </MaterialFab>
  );
};

export default Fab;
