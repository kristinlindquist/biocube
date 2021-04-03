import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { Select } from 'components/Inputs';
import FilterInput from './FilterInput';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const FilterGroup = ({ members, ...props }: GroupProps): ReactElement => (
  <>
    {members.map((m) => [
      <Grid item xs={12} sm={4} key={`dimension-${m.index}`}>
        <Select
          {...getSelectProps({
            ...props,
            members,
            key: 'dimension',
            m,
          })}
          label="Filter Dimension"
        />
      </Grid>,
      <Grid item xs={12} sm={4} key={`operator-${m.index}`}>
        <Select
          {...getSelectProps({
            ...props,
            availableMembers: m.operators,
            members,
            key: 'operator',
            keyPath: 'name',
            m,
          })}
          defaultValue={(m.operator || {}).name}
          label="Operator"
        />
      </Grid>,
      <Grid item xs={12} sm={4} key={`filterInput-${m.index}`}>
        <FilterInput {...props} member={m} />
      </Grid>,
    ])}
    {!members.length && (
      <Select
        {...getSelectProps({
          ...props,
          members,
          key: 'dimension',
        })}
        label="Filter"
      />
    )}
  </>
);

export default FilterGroup;
