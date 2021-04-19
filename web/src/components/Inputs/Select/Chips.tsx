import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, ChipProps } from '@material-ui/core';
import clsx from 'clsx';

import { IdType, SelectOptionType as OptionType } from 'types';

const useStyles = makeStyles(() => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  outlined: {
    marginTop: -8,
    marginBottom: -8,
  },
}));

type ChipsProps = {
  /**
   * optional callback on chip deletion
   */
  handleDelete?: (id: IdType) => void;
  /**
   * select box options
   */
  options: OptionType[];
  /**
   * selected option(s)
   */
  selected: IdType[];
  /**
   * *select* display variant
   */
  selectVariant?: 'standard' | 'outlined' | 'filled';
} & Partial<ChipProps>;

/**
 * Get objects corresponding to selections
 */
const getSelectedOptions = (selections: IdType[], options: OptionType[]) =>
  selections
    .map((s) => options.find(({ id }) => (id as string) === (s as string)))
    .filter((s) => s);

/**
 * Chips for multi-select
 */
const Chips = ({
  handleDelete,
  options,
  selected,
  selectVariant,
  ...props
}: ChipsProps): ReactElement => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.chips, {
        [classes.outlined]: selectVariant === 'outlined',
      })}>
      {getSelectedOptions(selected, options).map(({ id, name }) => (
        <Chip
          {...props}
          key={id}
          label={name}
          onDelete={() => handleDelete(id)}
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
        />
      ))}
    </div>
  );
};

export default Chips;
