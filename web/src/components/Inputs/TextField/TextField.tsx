import { ReactElement, useState } from 'react';
import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
} from '@material-ui/core';

export interface TextFieldProps {
  onChange: (value: string | number | Array<string | number>) => void;
}

const TextField = ({
  onChange,
  value: newValue,
  ...props
}: TextFieldProps & MaterialTextFieldProps): ReactElement => {
  const [value, setValue] = useState(newValue);

  return (
    <MaterialTextField
      {...props}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      value={value}
    />
  );
};

export default TextField;
