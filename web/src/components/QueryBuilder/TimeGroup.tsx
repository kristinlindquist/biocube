import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { Select } from 'components/Inputs';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const DateRanges = [
  { name: 'All time', id: undefined },
  { name: 'Today', id: 'Today' },
  { name: 'Yesterday', id: 'Yesterday' },
  { name: 'This week', id: 'This week' },
  { name: 'This month', id: 'This month' },
  { name: 'This quarter', id: 'This quarter' },
  { name: 'This year', id: 'This year' },
  { name: 'Last 7 days', id: 'Last 7 days', isDefault: true },
  { name: 'Last 30 days', id: 'Last 30 days' },
  { name: 'Last week', id: 'Last week' },
  { name: 'Last month', id: 'Last month' },
  { name: 'Last quarter', id: 'Last quarter' },
  { name: 'Last year', id: 'Last year' },
];

const TimeGroup = ({
  members,
  availableMembers,
  name,
  updateMethods,
}: GroupProps): ReactElement => (
  <>
    {members.map((m) => [
      <Grid item xs={12} sm={4}>
        <Select
          {...getSelectProps(
            availableMembers,
            updateMethods,
            'dimension',
            null,
            m,
          )}
          emptyOption={false}
          label={name}
        />
      </Grid>,
      <Grid item xs={12} sm={4}>
        <Select
          {...getSelectProps(DateRanges, updateMethods, 'dateRange', 'id', m)}
          emptyOption={false}
          label="Date Range"
        />
      </Grid>,
      <Grid item xs={12} sm={4}>
        <Select
          {...getSelectProps(
            m.dimension.granularities,
            updateMethods,
            'granularity',
            'name',
            m,
          )}
          defaultValue={['day']}
          emptyOption={false}
          label="Granularity"
        />
      </Grid>,
    ])}
    {!members.length && (
      <Grid item xs={12}>
        <Select
          {...getSelectProps(
            availableMembers,
            updateMethods,
            'dimension',
            'dimension',
            null,
          )}
          label={name}
        />
      </Grid>
    )}
  </>
);

export default TimeGroup;
