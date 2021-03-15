import React, { ReactElement, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Chip,
  FormControl,
  Input,
  InputLabel,
  Select as MaterialSelect,
  SelectProps as MaterialSelectProps,
} from '@material-ui/core';
import { uniq } from 'lodash';

export type SelectProps = {
  /**
   * default value
   */
  defaultValue?: string;
  /**
   * full width?
   */
  fullWidth?: boolean;
  /**
   * show multiple?
   */
  label: string;
  /**
   * optional callback
   */
  onSelect?: (
    value: Array<{
      id: string | number;
      name: string;
    }>,
  ) => unknown;
  /**
   * select box options
   */
  options: Array<{
    id: string | number;
    name: string;
  }>;
} & MaterialSelectProps;

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    fullWidth: {
      width: '100%',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
  }),
);

const getSelectedOptions = (selections, options) =>
  selections
    .map((s) => options.find(({ id }) => (id as string) === s))
    .filter((s) => s);

/**
 * A select box
 */
const Select = ({
  defaultValue = null,
  fullWidth = false,
  label,
  multiple,
  onSelect = () => {},
  options,
  ...props
}: SelectProps): ReactElement => {
  const classes = useStyles();
  const [state, setState] = useState<string[]>([defaultValue].filter((s) => s));

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    const selections = uniq([...state, event.target.value].filter((s) => s));
    setState(selections);
    onSelect(getSelectedOptions(selections, options));
  };

  return (
    <FormControl
      className={clsx({ [classes.fullWidth]: fullWidth }, classes.formControl)}>
      <InputLabel shrink htmlFor={`${label}-select`}>
        {label}
      </InputLabel>
      <MaterialSelect
        {...props}
        inputProps={{
          name: label,
          id: `${label}-select`,
        }}
        input={<Input id="select-multiple-chip" />}
        native={!multiple}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {getSelectedOptions(selected as string[], options).map(
              ({ id, name }) => (
                <Chip className={classes.chip} key={id} label={name} />
              ),
            )}
          </div>
        )}
        onChange={handleChange}
        value={multiple ? state : state[0]}>
        <option value=""> </option>
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;
