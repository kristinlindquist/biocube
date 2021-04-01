import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { Select } from 'components/Inputs';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const DateRanges = [
  { title: 'All time', name: undefined },
  { title: 'Today', name: 'Today' },
  { title: 'Yesterday', name: 'Yesterday' },
  { title: 'This week', name: 'This week' },
  { title: 'This month', name: 'This month' },
  { title: 'This quarter', name: 'This quarter' },
  { title: 'This year', name: 'This year' },
  { title: 'Last 7 days', name: 'Last 7 days', isDefault: true },
  { title: 'Last 30 days', name: 'Last 30 days' },
  { title: 'Last week', name: 'Last week' },
  { title: 'Last month', name: 'Last month' },
  { title: 'Last quarter', name: 'Last quarter' },
  { title: 'Last year', name: 'Last year' },
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
          {...getSelectProps(DateRanges, updateMethods, 'dateRange', 'name', m)}
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
