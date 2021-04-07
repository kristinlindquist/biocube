import { ReactElement } from 'react';
import { IconButton as MaterialIconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export type IconButtonProps = {
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
};

/**
 * An Icon Button
 */
const IconButton = ({
  icon,
  label = 'add',
  size,
  ...props
}: IconButtonProps): ReactElement => (
  <MaterialIconButton aria-label={label} color="primary" size={size} {...props}>
    {icon || <EditIcon fontSize={size === 'small' ? size : undefined} />}
  </MaterialIconButton>
);

export default IconButton;
