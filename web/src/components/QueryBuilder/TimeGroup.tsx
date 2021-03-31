import { Grid } from '@material-ui/core';

import { Select } from 'components/Inputs';

import { getSelectProps } from './utils';

const DateRanges = [
  { name: 'All time', id: undefined },
  { name: 'Today', id: 'today' },
  { name: 'Yesterday', id: 'yesterday' },
  { name: 'This week', id: 'this week' },
  { name: 'This month', id: 'this month' },
  { name: 'This quarter', id: 'this quarter' },
  { name: 'This year', id: 'this year' },
  { name: 'Last 7 days', id: '7 days' },
  { name: 'Last 30 days', id: '30 days' },
  { name: 'Last week', id: 'last week' },
  { name: 'Last month', id: 'last month' },
  { name: 'Last quarter', id: 'last quarter' },
  { name: 'Last year', id: 'last year' },
];

export interface TimeGroupProps {
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
  title?: string;
}

const TimeGroup = ({
  members,
  availableMembers,
  addMemberName,
  updateMethods,
  title,
}: TimeGroupProps) => (
  <>
    {members.map((m) => [
      <Grid item xs={12} sm={4}>
        <Select
          key={`${m.dimension.name}-member`}
          label={title}
          {...getSelectProps(
            availableMembers,
            updateMethods,
            'dimension',
            null,
            m,
          )}
        />
      </Grid>,
      <Grid item xs={12} sm={4}>
        <Select
          key={`${m.dimension.name}-dateRange`}
          label="Date Range"
          {...getSelectProps(DateRanges, updateMethods, 'dateRange', 'id', m)}
        />
      </Grid>,
      <Grid item xs={12} sm={4}>
        <Select
          key={`${m.dimension.name}-granularity`}
          label="Granularity"
          {...getSelectProps(
            m.dimension.granularities,
            updateMethods,
            'granularity',
            'name',
            m,
          )}
        />
      </Grid>,
    ])}
    {!members.length && (
      <Grid item xs={12}>
        <Select
          label={addMemberName}
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
