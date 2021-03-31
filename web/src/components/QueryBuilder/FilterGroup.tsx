// import AddIcon from '@material-ui/icons/Add';

// import { Dropdown } from 'components/Button';
import { Select } from 'components/Inputs';

import FilterInput from './FilterInput';
import { getSelectProps } from './utils';

export interface FilterGroupProps {
  /**
   * Options
   */
  members?: any[];
  availableMembers?: any[];
  addMemberName?: string;
  updateMethods: {
    add: (member: any) => void;
    update: (member: { index: number }, updateWith: any) => void;
    remove: (member: { index: number }) => void;
  };
}

const FilterGroup = ({
  members,
  availableMembers,
  updateMethods,
}: FilterGroupProps) => (
  <span>
    {members.map((m) => (
      <div key={m.index}>
        <Select
          label="select 1"
          {...getSelectProps(
            availableMembers,
            updateMethods,
            'dimension',
            null,
            m,
          )}
        />
        <Select
          label="select 2"
          {...getSelectProps(m.operators, updateMethods, 'operator', null, m)}
          defaultValue={m.operator}
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
        updateMethods,
        'dimension',
        null,
        null,
      )}
    />
  </span>
);

export default FilterGroup;
