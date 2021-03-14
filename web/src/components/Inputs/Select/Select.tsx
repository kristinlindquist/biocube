import React, { ReactElement, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

export interface SelectProps {
  /**
   * default value
   */
  defaultValue?: string | number | null;
  /**
   * label for select box
   */
  label: string;
  /**
   * optional callback
   */
  onSelect?: (value: string | number) => unknown;
  /**
   * select box options
   */
  options: Array<{
    id: string | number;
    name: string;
  }>;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
  }),
);

/**
 * A select box
 */
const Select = ({
  defaultValue = null,
  label,
  onSelect = () => {},
  options,
}: SelectProps): ReactElement => {
  const classes = useStyles();
  const [value, setValue] = useState(defaultValue);

  const handleChange = (
    event: React.ChangeEvent<{ value: string | number }>,
  ) => {
    setValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor={`${label}-select`}>
        {label}
      </InputLabel>
      <NativeSelect
        inputProps={{
          name: label,
          id: `${label}-select`,
        }}
        onChange={handleChange}
        value={value}>
        <option value=""> </option>
        {options.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Select;
