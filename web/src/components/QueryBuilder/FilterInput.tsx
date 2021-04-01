import { ReactElement } from 'react';
import { TextField } from '@material-ui/core';

import { Select } from 'components/Inputs';
import { SelectOptionType } from 'types';
import { UpdateMethods } from './types';

export interface FilterProps {
  onChange: (value: string) => void;
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
    <Select
      label="filter inputs"
      key="input"
      onSelect={(s) => onChange(s[0].id)}
      options={values}
    />
  ),
  number: ({ values, onChange }: FilterProps) => (
    <TextField
      key="input"
      style={{
        width: 300,
      }}
      onChange={(e) => onChange(e.target.value)}
      value={(values && values[0]) || ''}
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
      values={member.values}
      onChange={(values) => updateMethods.update(member, { ...member, values })}
    />
  );
};

export default FilterInput;
