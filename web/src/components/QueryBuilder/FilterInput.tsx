import { ReactElement } from 'react';

import { TextField } from 'components/Inputs';
import { SelectOptionType } from 'types';
import { UpdateMethods } from './types';

export interface FilterProps {
  /**
   * OnChange callback
   */
  onChange: (value: string | number | Array<string | number>) => void;
  /**
   * Options
   */
  values?: SelectOptionType[];
}

const FilterInputs = {
  // TODO: replace with select + add
  string: ({ values = [], onChange }: FilterProps) => (
    <TextField
      fullWidth
      key="input"
      label="Filter Value"
      onChange={(val) => onChange([val])}
      value={values || ['']}
      variant="outlined"
    />
  ),
  number: ({ values, onChange }: FilterProps) => (
    <TextField
      fullWidth
      key="input"
      label="Filter Value"
      onChange={(val) => onChange([val])}
      value={values || [0]}
      variant="outlined"
    />
  ),
};

export interface FilterInputProps {
  member: {
    index: number;
    dimension: {
      type: string;
    };
    values: SelectOptionType[];
  };
  updateMethods: UpdateMethods;
}

const FilterInput = ({
  member,
  updateMethods,
}: FilterInputProps): ReactElement => {
  const Filter = FilterInputs[member.dimension.type] || FilterInputs.string;

  return (
    <Filter
      key="filter"
      onChange={(values) => updateMethods.update(member, { ...member, values })}
      values={member.values}
    />
  );
};

export default FilterInput;
