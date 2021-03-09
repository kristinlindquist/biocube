import moment from 'moment';

export const unixYearRange = {
  start: moment().startOf('year').unix() * 1000,
  end: moment().startOf('year').add(3, 'months').unix() * 1000, // TODO: make 1 year
};
