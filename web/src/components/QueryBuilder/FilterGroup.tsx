import { ReactElement } from 'react';

import { Select } from 'components/Inputs';
import FilterInput from './FilterInput';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const FilterGroup = ({ members, ...props }: GroupProps): ReactElement => (
  <span>
    {members.map((m) => (
      <div key={m.index}>
        <Select
          label="Dimension"
          {...getSelectProps({
            ...props,
            members,
            key: 'dimension',
            m,
          })}
        />
        <Select
          defaultValue={m.operator}
          label="Operator"
          {...getSelectProps({
            ...props,
            availableMembers: m.operators,
            members,
            key: 'operator',
            m,
          })}
        />
        <FilterInput {...props} member={m} key="filterInput" />
      </div>
    ))}
    <Select
      label="Filter"
      {...getSelectProps({
        ...props,
        members,
        key: 'dimension',
      })}
    />
  </span>
);

export default FilterGroup;
