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

/**
 * Floating action button.
 *
 * "A floating action button (FAB) performs the primary, or most common,
 * action on a screen. It appears in front of all screen content, typically
 * as a circular shape with an icon in its center."
 *
 * https://material.io/components/buttons-floating-action-button
 */
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
        ? { position: 'fixed', bottom: 20, right: 20 }
        : undefined
    }
    {...props}>
    {icon || <AddIcon />}
  </MaterialFab>
);

export default Fab;
