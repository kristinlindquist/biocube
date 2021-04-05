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
  ...props
}: TextFieldProps & MaterialTextFieldProps): ReactElement => {
  const [value, setValue] = useState(null);

  return (
    <MaterialTextField
      {...props}
      onChange={(e) => {
        onChange(e.target.value);
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

export default TextField;
