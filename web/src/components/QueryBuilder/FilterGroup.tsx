import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import { IconButton, Dropdown } from 'components/Button';
import { Select } from 'components/Inputs';
import FilterInput from './FilterInput';
import { GroupProps } from './types';
import { getDropdownProps, getSelectProps } from './utils';

const FilterGroup = ({
  members,
  updateMethods,
  ...props
}: GroupProps): ReactElement => (
  <>
    {members.map((m) => [
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
            members,
            key: 'dimension',
            m,
            updateMethods,
          })}
          disabled
          defaultValue={[m.dimension.name]}
          label="Filter Dimension"
        />
      </Grid>,
      <Grid item xs={12} sm={3} key={`operator-${m.index}`}>
        <Select
          {...getSelectProps({
            ...props,
            availableMembers: m.operators,
            members,
            key: 'operator',
            keyPath: 'name',
            m,
            updateMethods,
          })}
          defaultValue={[m.operator || m.operators[0]]}
          label="Operator"
        />
      </Grid>,
      <Grid item xs={12} sm={4} key={`filterInput-${m.index}`}>
        <FilterInput {...props} member={m} updateMethods={updateMethods} />
      </Grid>,
    ])}
    <Grid item xs={12}>
      <Dropdown
        {...getDropdownProps({
          ...props,
          members,
          key: 'dimension',
          updateMethods,
        })}
        label="Add Filter"
      />
    </Grid>
  </>
);

export default FilterGroup;
