import { ReactElement } from 'react';
import { IconButton as MaterialIconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export interface IconButtonProps {
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
  /**
   * size
   */
  size?: 'small' | 'medium';
}

const IconButton = ({
  icon,
  label = 'add',
  ...props
}: IconButtonProps): ReactElement => (
  <MaterialIconButton aria-label={label} color="primary" {...props}>
    {icon || <EditIcon />}
  </MaterialIconButton>
);

export default IconButton;
