import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { TimeDimension } from '@cubejs-client/core';

import { Select } from 'components/Inputs';
import { GroupProps } from './types';
import { getSelectProps } from './utils';

const DateRanges = [
  { title: 'All time', name: undefined },
  { title: 'Today', name: 'Today' },
  { title: 'Yesterday', name: 'Yesterday' },
  { title: 'This week', name: 'This week' },
  { title: 'This month', name: 'This month' },
  { title: 'Last 7 days', name: 'From 6 days ago to now' },
  { title: 'Last 30 days', name: 'From 29 days ago to now' },
  { title: 'Last 365 days', name: 'From 364 days ago to now' },
];

const TimeGroup = ({
  members,
  name,
  query,
  ...props
}: GroupProps): ReactElement => (
  <>
    {members.map((m) => {
      const selection: TimeDimension | null = query?.timeDimensions.find(
        (td) => td.dimension === m.dimension,
      );

      return [
        <Grid item xs={12} sm={4} key={name}>
          <Select
            {...getSelectProps({
              ...props,
              key: 'dimension',
              m,
              members,
              selection: selection?.dimension,
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
              key: 'dateRange',
              keyPath: 'name',
              m,
              members,
              selection: selection?.dateRange.toString(),
            })}
            emptyOption={false}
            label="Date Range"
          />
        </Grid>,
        <Grid item xs={12} sm={4} key={`${m.name}-granularity`}>
          <Select
            {...getSelectProps({
              ...props,
              availableMembers: m.dimension?.granularities,
              key: 'granularity',
              keyPath: 'name',
              m,
              members,
              selection: selection?.granularity,
            })}
            emptyOption={false}
            label="Granularity"
          />
        </Grid>,
      ];
    })}
    {!members.length && (
      <Grid item xs={12}>
        <Select
          {...getSelectProps({
            ...props,
            key: 'dimension',
            members,
          })}
          label={name}
        />
      </Grid>
    )}
  </>
);

export default TimeGroup;
