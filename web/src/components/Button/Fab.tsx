import { ReactElement } from 'react';
import { Fab as MaterialFab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface FabProps {
  /**
   * position
   */
  position?: 'fixed' | 'relative';
  /**
   * icon
   */
  icon?: ReactElement;
  /**
   * label
   */
  label?: string;
  /**
   * onClick
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Fab = ({
  icon,
  label = 'add',
  position = 'fixed',
  ...props
}: FabProps): ReactElement => (
  <MaterialFab
    aria-label={label}
    color="primary"
    sx={
      position === 'fixed'
        ? { position: 'fixed', bottom: 25, right: 25 }
        : undefined
    }
    {...props}>
    {icon || <AddIcon />}
  </MaterialFab>
);

export default Fab;
