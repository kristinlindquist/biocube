import { ReactElement } from 'react';
import { Filter } from '@cubejs-client/core';
import { Grid } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import { IconButton, Dropdown } from 'components/Button';
import { Select } from 'components/Inputs';
import FilterInput from './FilterInput';
import { GroupProps } from './types';
import { getDropdownProps, getSelectProps } from './utils';

const FilterGroup = ({
  members,
  query,
  updateMethods,
  ...props
}: GroupProps): ReactElement => (
  <>
    {members.map((m) => {
      const selection: Filter | null = query?.filters.find(
        (td) => td.member === m.name,
      );

      return [
        <Grid item xs={1} key={`delete-${m.index}`}>
          <IconButton
            icon={<ClearIcon />}
            onClick={() => updateMethods.remove({ index: m.index })}
          />
        </Grid>,
        <Grid item sm={4} xs={11} key={`dimension-${m.index}`}>
          <Select
            {...getSelectProps({
              ...props,
              key: 'dimension',
              m,
              members,
              updateMethods,
            })}
            disabled
            defaultValue={[m.dimension?.name || selection?.dimension]}
            label="Filter Dimension"
          />
        </Grid>,
        <Grid item xs={12} sm={3} key={`operator-${m.index}`}>
          <Select
            {...getSelectProps({
              ...props,
              availableMembers: m.operators,
              key: 'operator',
              keyPath: 'name',
              m,
              members,
              updateMethods,
            })}
            defaultValue={[m.operator || m.operators[0] || selection?.operator]}
            label="Operator"
          />
        </Grid>,
        <Grid item xs={12} sm={4} key={`filterInput-${m.index}`}>
          <FilterInput {...props} member={m} updateMethods={updateMethods} />
        </Grid>,
      ];
    })}
    <Grid item xs={12}>
      <Dropdown
        {...getDropdownProps({
          ...props,
          key: 'dimension',
          members,
          updateMethods,
        })}
        label="Add Filter"
      />
    </Grid>
  </>
);

export default FilterGroup;
