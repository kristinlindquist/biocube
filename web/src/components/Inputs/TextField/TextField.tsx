import { ReactElement, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
} from '@material-ui/core';

export interface TextFieldProps {
  fullWidth: boolean;
  /**
   * onChange function
   */
  onChange: (value: string | number | Array<string | number>) => void;
  /**
   * variant for fields
   */
  variant?: 'filled' | 'outlined' | 'standard';
}

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: '100%',
  },
}));

/**
 * A form field for single or multi-line text, or
 * numbers
 */
const TextField = ({
  fullWidth,
  onChange,
  value: newValue,
  variant = 'standard',
  ...props
}: TextFieldProps & Partial<MaterialTextFieldProps>): ReactElement => {
  const [value, setValue] = useState(newValue);
  const classes = useStyles();

  return (
    <MaterialTextField
      {...props}
      className={clsx({
        [classes.fullWidth]: fullWidth,
      })}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      value={value}
      variant={variant}
    />
  );
};

export default TextField;
