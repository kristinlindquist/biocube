import React, { ReactElement, useState } from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Chip,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select as MaterialSelect,
  SelectProps as MaterialSelectProps,
} from '@material-ui/core';
import { uniq } from 'lodash';

import { IdType, SelectOptionType as OptionType } from 'types';

export type SelectProps = {
  /**
   * default value
   */
  defaultValue?: IdType[];
  /**
   * full width?
   */
  fullWidth?: boolean;
  /**
   * show multiple?
   */
  label: string;
  /**
   * optional callback on chip deletion
   */
  onDelete?: (selection: OptionType[]) => unknown;
  /**
   * optional callback on select
   */
  onSelect?: (selection: OptionType[]) => unknown;
  /**
   * select box options
   */
  options: OptionType[];
} & MaterialSelectProps;

const useStyles = makeStyles(() =>
  createStyles({
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    formControl: {},
    fullWidth: {
      width: '100%',
    },
    label: {
      position: 'relative',
      paddingRight: 25,
      whiteSpace: 'nowrap',
      '&+div': {
        marginTop: 0,
      },
    },
  }),
);

/**
 * Styles to indicate menu item selections
 */
const getMenuItemStyles = (id: IdType, selections: IdType[], theme: Theme) => ({
  fontWeight:
    selections.indexOf(id) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
});

/**
 * Get objects corresponding to selections
 */
const getSelectedOptions = (selections: IdType[], options: OptionType[]) =>
  selections
    .map((s) => options.find(({ id }) => (id as string) === (s as string)))
    .filter((s) => s);

/**
 * Material UI recommends MenuItems instead of options for
 * non-native select (used when multiple === true)
 */
const getNonNativeOptions = (
  options: OptionType[],
  selections: IdType[],
  theme: Theme,
) =>
  options.map(({ id, name }) => (
    <MenuItem
      key={id}
      style={getMenuItemStyles(id, selections, theme)}
      value={id}>
      {name}
    </MenuItem>
  ));

/**
 * Get options for native select
 */
const getNativeOptions = (options: OptionType[]) => [
  <option value=""> </option>,
  ...options.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  )),
];

/**
 * Get select options
 */
const getOptions = (
  isNative: boolean,
  options: OptionType[],
  selections: IdType[],
  theme: Theme,
) =>
  isNative
    ? getNativeOptions(options)
    : getNonNativeOptions(options, selections, theme);

/**
 * A select box
 */
const Select = ({
  defaultValue = [],
  fullWidth = false,
  label,
  multiple = false,
  onSelect = () => {},
  onDelete = () => {},
  options,
  ...props
}: SelectProps): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const native = !multiple;
  const [selections, setSelections] = useState<IdType[]>(defaultValue);

  const onChange = (newSelections: IdType[]) => {
    setSelections(newSelections);
    onSelect(getSelectedOptions(newSelections, options));
  };

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    const newSelections = multiple
      ? uniq([...selections, event.target.value].filter((s) => s))
      : [event.target.value];
    onChange(newSelections);
  };

  const handleDelete = (id) => {
    onChange(selections.filter((s) => s !== id));
    onDelete(getSelectedOptions([id], options));
  };

  return (
    <FormControl
      className={clsx({ [classes.fullWidth]: fullWidth }, classes.formControl)}>
      <InputLabel className={classes.label} htmlFor={`${label}-select`}>
        {label}
      </InputLabel>
      <MaterialSelect
        {...props}
        inputProps={{
          name: label,
          id: `${label}-select`,
        }}
        input={<Input id="select-multiple-chip" />}
        native={native}
        renderValue={
          !native
            ? (selected) => (
                <div className={classes.chips}>
                  {getSelectedOptions(selected as IdType[], options).map(
                    ({ id, name }) => (
                      <Chip
                        className={classes.chip}
                        key={id}
                        label={name}
                        onDelete={() => handleDelete(id)}
                        onMouseDown={(event) => {
                          event.stopPropagation();
                        }}
                      />
                    ),
                  )}
                </div>
              )
            : undefined
        }
        onChange={handleChange}
        value={multiple ? selections : selections[0]}>
        {getOptions(native, options, selections, theme)}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;
