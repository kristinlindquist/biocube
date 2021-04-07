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
   * label
   */
  label: string;
  /**
   * show multiple?
   */
  multiple?: boolean;
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
  /**
   * display variant
   */
  variant?: 'standard' | 'outlined' | 'filled';
} & MaterialSelectProps;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  fullWidth: {
    width: '100%',
  },
}));

/**
 * Styles to indicate menu item selections
 */
const getStyles = (id: IdType, selections: IdType[], theme: Theme) => ({
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
const getOptions = (
  label: string,
  options: OptionType[],
  selections: IdType[],
  theme: Theme,
) =>
  options.map(({ id, name }) => (
    <MenuItem
      key={`option-${id}-${label}`}
      style={getStyles(id, selections, theme)}
      value={id}>
      {name}
    </MenuItem>
  ));

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
      className={clsx(classes.formControl, {
        [classes.fullWidth]: fullWidth,
      })}
      variant={variant}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <MaterialSelect
        {...props}
        id={label}
        labelId={`${label}-label`}
        label={label}
        multiple={multiple}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        onChange={({ target }) => handleChange(target.value as IdType[])}
        renderValue={
          multiple
            ? (selected) => (
                <Chips
                  handleDelete={handleDelete}
                  options={options}
                  selected={selected as IdType[]}
                  sx={variant !== 'outlined' ? { my: 1, mr: 0.5 } : { mr: 0.5 }}
                />
              )
            : undefined
        }
        value={selections}>
        {getOptions(label, options, selections, theme)}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;
