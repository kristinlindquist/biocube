import { TextField } from '@material-ui/core';

import { Select } from 'components/Inputs';
import { SelectOptionType } from 'types';

export interface FilterProps {
  /**
   * Options
   */
  values?: SelectOptionType[];
  onChange: (value: any) => void;
}

export interface FilterInputProps {
  /**
   * Options
   */
  member: {
    dimension: any;
    values: SelectOptionType[];
  };
  updateMethods: {
    update: any;
  };
}

const FilterInputs = {
  string: ({ values = [], onChange }: FilterProps) => (
    <Select
      label="filter inputs"
      key="input"
      onChange={onChange}
      options={values}
    />
  ),
  number: ({ values, onChange }: FilterProps) => (
    <TextField
      key="input"
      style={{
        width: 300,
      }}
      onChange={(e) => onChange([e.target.value])}
      value={(values && values[0]) || ''}
    />
  ),
};

const FilterInput = ({ member, updateMethods }: FilterInputProps) => {
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
