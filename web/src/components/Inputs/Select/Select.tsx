import { ReactElement, useState } from 'react';
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MaterialSelect,
  SelectProps as MaterialSelectProps,
} from '@material-ui/core';
import { isEmpty, uniq } from 'lodash';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { IdType, SelectOptionType as OptionType } from 'types';
import Chips from './Chips';

export type SelectProps = {
  /**
   * default value
   */
  defaultValue?: IdType[];
  /**
   * include empty option
   */
  emptyOption?: boolean;
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

const useStyles = makeStyles((theme) => ({
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
  outlined: {
    paddingLeft: theme.spacing(1),
  },
}));

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
      key={`option-${id}`}
      style={getMenuItemStyles(id, selections, theme)}
      value={id}>
      {name}
    </MenuItem>
  ));

/**
 * Get options for native select
 */
const getNativeOptions = (options: OptionType[], includeEmpty) =>
  [
    includeEmpty ? (
      <option key="emp-o" value={null}>
        {' '}
      </option>
    ) : null,
    ...options.map(({ id, name }) => (
      <option key={`option-${id}`} value={id}>
        {name}
      </option>
    )),
  ].filter((o) => o);

/**
 * Get select options
 */
const getOptions = (
  isNative: boolean,
  options: OptionType[],
  selections: IdType[],
  includeEmpty: boolean,
  theme: Theme,
) =>
  isNative
    ? getNativeOptions(options, includeEmpty)
    : getNonNativeOptions(options, selections, theme);

/**
 * Get default selection
 */
const getInitial = (options, defaultValue, emptyOption): IdType[] => {
  if (isEmpty(defaultValue)) {
    return emptyOption ? [] : [options[0].id];
  }
  return defaultValue;
};

/**
 * A select box
 */
const Select = ({
  defaultValue = null,
  emptyOption = true,
  fullWidth = false,
  label,
  multiple = false,
  onSelect = () => {},
  onDelete = () => {},
  options,
  variant,
  ...props
}: SelectProps): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const native = !multiple;
  const [selections, setSelections] = useState<IdType[]>(
    getInitial(options, defaultValue, emptyOption),
  );
  const [open, setOpen] = useState(false);

  useDeepCompareEffect(() => {
    // no callback on initial set
    setSelections(getInitial(options, defaultValue, emptyOption));
  }, [defaultValue, options]);

  const onChange = (newSelections: IdType[]) => {
    setSelections(newSelections);
    onSelect(getSelectedOptions(newSelections, options));
    setOpen(false);
  };

  const handleChange = (value: IdType | IdType[]) => {
    const newSelections = Array.isArray(value)
      ? uniq([...selections, ...value].filter((s) => s))
      : [value];
    onChange(newSelections);
  };

  const handleDelete = (id) => {
    onChange(selections.filter((s) => s !== id));
    onDelete(getSelectedOptions([id], options));
  };

  return (
    <FormControl
      className={clsx(
        {
          [classes.fullWidth]: fullWidth,
        },
        classes.formControl,
      )}>
      <InputLabel
        className={clsx(
          { [classes.outlined]: variant === 'outlined' },
          classes.label,
        )}
        htmlFor={`${label}-select`}>
        {label}
      </InputLabel>
      <MaterialSelect
        {...props}
        id={label}
        labelId={`${label}-select`}
        multiple={multiple}
        native={native}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        onChange={({ target }) => handleChange(target.value as string)}
        renderValue={
          !native
            ? (selected) => (
                <Chips
                  handleDelete={handleDelete}
                  options={options}
                  selected={selected as IdType[]}
                />
              )
            : undefined
        }
        value={multiple ? selections : selections[0]}
        variant={variant}>
        {getOptions(native, options, selections, emptyOption, theme)}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;
