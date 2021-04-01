import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { Select } from 'components/Inputs';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const DateRanges = [
  { name: 'All time', id: undefined },
  { name: 'Today', id: 'today' },
  { name: 'Yesterday', id: 'yesterday' },
  { name: 'This week', id: 'this week' },
  { name: 'This month', id: 'this month' },
  { name: 'This quarter', id: 'this quarter' },
  { name: 'This year', id: 'this year' },
  { name: 'Last 7 days', id: '7 days', isDefault: true },
  { name: 'Last 30 days', id: '30 days' },
  { name: 'Last week', id: 'last week' },
  { name: 'Last month', id: 'last month' },
  { name: 'Last quarter', id: 'last quarter' },
  { name: 'Last year', id: 'last year' },
];

const TimeGroup = ({
  members,
  availableMembers,
  name,
  updateMethods,
  title,
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
          label={title}
        />
      </Grid>,
      <Grid item xs={12} sm={4}>
        <Select
          {...getSelectProps(DateRanges, updateMethods, 'dateRange', 'id', m)}
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
          label="Granularity"
        />
      </Grid>,
    ])}
    {!members.length && (
      <Grid item xs={12}>
        <Select
          label={name}
          {...getSelectProps(
            availableMembers,
            updateMethods,
            'dimension',
            'dimension',
            null,
          )}
        />
      </Grid>
    )}
  </>
);

export default TimeGroup;
