import { ReactElement } from 'react';

import { Select } from 'components/Inputs';
import FilterInput from './FilterInput';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const FilterGroup = ({
  members,
  availableMembers,
  updateMethods,
}: GroupProps): ReactElement => (
  <span>
    {members.map((m) => (
      <div key={m.index}>
        <Select
          label="Dimension"
          {...getSelectProps(
            availableMembers,
            members,
            updateMethods,
            'dimension',
            null,
            m,
          )}
        />
        <Select
          defaultValue={m.operator}
          label="Operator"
          {...getSelectProps(
            m.operators,
            members,
            updateMethods,
            'operator',
            null,
            m,
          )}
        />
        <FilterInput
          member={m}
          key="filterInput"
          updateMethods={updateMethods}
        />
      </div>
    ))}
    <Select
      label="Filter"
      {...getSelectProps(
        availableMembers,
        members,
        updateMethods,
        'dimension',
        null,
        null,
      )}
    />
  </span>
);

export default FilterGroup;
