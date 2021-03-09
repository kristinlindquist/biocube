import { ReactElement } from 'react';
import { Box, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { useDateRange } from 'contexts';
import Range from './Range';

export interface PagerProps {
  /**
   * picker type
   */
  type: 'date' | 'datetime-local' | 'time';
}

/**
 * Subtracts or adds diff, depending on direction
 */
const getPagedTime = (date: Date, diff: number, direction: 'next' | 'prev') =>
  direction === 'next'
    ? new Date(date.getTime() + diff)
    : new Date(date.getTime() - diff);

/**
 * Get paged date object
 */
const getNewPage = (start: Date, end: Date, direction: 'next' | 'prev') => {
  const diff = end.getTime() - start.getTime();

  return {
    start: getPagedTime(start, diff, direction),
    end: getPagedTime(end, diff, direction),
  };
};

const getButton = (
  start: Date,
  end: Date,
  set: (obj: { start: Date; end: Date }) => void,
  direction: 'next' | 'prev',
) => (
  <Box pl={1} pr={1}>
    <IconButton onClick={() => set(getNewPage(start, end, direction))}>
      {direction === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </Box>
);

/**
 * A date range picker with paging
 */
const Pager = ({ type = 'date' }: PagerProps): ReactElement => {
  const [{ start, end }, { set }] = useDateRange();

  return (
    <Box display="flex">
      {getButton(start, end, set, 'prev')}
      <Range type={type} />
      {getButton(start, end, set, 'next')}
    </Box>
  );
};

export default Pager;
