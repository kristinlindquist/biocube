import { ReactElement } from 'react';
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
  CircularProgress,
} from '@material-ui/core';

export type ButtonProps = {
  /**
   * label
   */
  label: string;
  /**
   * loading
   */
  loading?: boolean;
} & Partial<MaterialButtonProps>;

/**
 * A Button
 */
const Button = ({ label, loading, ...props }: ButtonProps): ReactElement => (
  <MaterialButton aria-label={label} color="primary" {...props}>
    {label}
    {loading && <CircularProgress color="inherit" size={14} sx={{ ml: 1 }} />}
  </MaterialButton>
);

export default Button;
