import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, ChipProps } from '@material-ui/core';

import { IdType, SelectOptionType as OptionType } from 'types';

const useStyles = makeStyles(() => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: -4,
    marginBottom: -4,
  },
}));

/**
 * Get objects corresponding to selections
 */
const getSelectedOptions = (selections: IdType[], options: OptionType[]) =>
  selections
    .map((s) => options.find(({ id }) => (id as string) === (s as string)))
    .filter((s) => s);

type ChipsProps = {
  handleDelete?: (id: IdType) => void;
  options: OptionType[];
  selected: IdType[];
};

/**
 * Chips for multi-select
 */
const Chips = ({
  handleDelete,
  options,
  selected,
  ...props
}: ChipsProps & ChipProps): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.chips}>
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
