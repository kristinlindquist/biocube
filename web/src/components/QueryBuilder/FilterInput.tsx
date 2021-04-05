import { ReactElement } from 'react';

import { TextField } from 'components/Inputs';
import { SelectOptionType } from 'types';
import { UpdateMethods } from './types';

export interface FilterProps {
  onChange: (value: string | number | Array<string | number>) => void;
  /**
   * Options
   */
  values?: SelectOptionType[];
}

export interface FilterInputProps {
  /**
   * Options
   */
  member: {
    index: number;
    dimension: {
      type: string;
    };
    values: SelectOptionType[];
  };
  updateMethods: UpdateMethods;
}

const FilterInputs = {
  string: ({ values = [], onChange }: FilterProps) => (
    <TextField
      key="input"
      label="Filter Value"
      onChange={(val) => onChange([val])}
      value={values || ['bpm']}
    />
  ),
  number: ({ values, onChange }: FilterProps) => (
    <TextField
      key="input"
      label="Filter Value"
      onChange={(val) => onChange([val])}
      value={values || [0]}
    />
  ),
};

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
