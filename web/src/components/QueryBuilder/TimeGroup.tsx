import { Typography } from '@material-ui/core';

import { Select } from 'components/Inputs';

import { getSelectProps } from './utils';

const DateRanges = [
  { name: 'All time', id: undefined },
  { name: 'Today', id: 'today' },
  { name: 'Yesterday', id: 'yesterday' },
  { name: 'This week', id: 'week' },
  { name: 'This month', id: 'month' },
  { name: 'This quarter', id: 'quarter' },
  { name: 'This year', id: 'year' },
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
  <div>
    {members.map((m) => [
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
      />,
      <Typography key={`${m.dimension.name}-for`}>for</Typography>,
      <Select
        key={`${m.dimension.name}-dateRange`}
        label="select date range"
        {...getSelectProps(DateRanges, updateMethods, 'dateRange', 'id', m)}
      />,
      <Typography key={`${m.dimension.name}-by`}>by</Typography>,
      <Select
        key={`${m.dimension.name}-granularity`}
        label="select granularity"
        {...getSelectProps(
          m.dimension.granularities,
          updateMethods,
          'granularity',
          'name',
          m,
        )}
      />,
    ])}
    {!members.length && (
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
    )}
  </div>
);

export default TimeGroup;
