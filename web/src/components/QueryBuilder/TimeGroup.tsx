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
  { title: 'Last 7 days', name: 'last 7 days' },
  { title: 'Last 30 days', name: 'Last 30 days' },
  { title: 'Last week', name: 'Last week' },
  { title: 'Last month', name: 'Last month' },
  { title: 'Last quarter', name: 'Last quarter' },
  { title: 'Last year', name: 'Last year' },
];

const TimeGroup = ({ members, name, ...props }: GroupProps): ReactElement => (
  <>
    {members.map((m) => [
      <Grid item xs={12} sm={4} key={name}>
        <Select
          {...getSelectProps({
            ...props,
            members,
            key: 'dimension',
            m,
          })}
          emptyOption={false}
          label={name}
        />
      </Grid>,
      <Grid item xs={12} sm={4} key={`${m.name}-daterange`}>
        <Select
          {...getSelectProps({
            ...props,
            availableMembers: DateRanges,
            members,
            key: 'dateRange',
            keyPath: 'name',
            m,
          })}
          emptyOption={false}
          label="Date Range"
        />
      </Grid>,
      <Grid item xs={12} sm={4} key={`${m.name}-granularity`}>
        <Select
          {...getSelectProps({
            ...props,
            availableMembers: m.dimension.granularities,
            members,
            key: 'granularity',
            keyPath: 'name',
            m,
          })}
          emptyOption={false}
          label="Granularity"
        />
      </Grid>,
    ])}
    {!members.length && (
      <Grid item xs={12}>
        <Select
          {...getSelectProps({
            ...props,
            members,
            key: 'dimension',
          })}
          label={name}
        />
      </Grid>
    )}
  </>
);

export default TimeGroup;
