import moment from 'moment';

export const unixYearRange = {
  start: new Date(moment().startOf('year').unix() * 1000),
  end: new Date(moment().startOf('year').add(3, 'months').unix() * 1000), // TODO: make 1 year
};

export const undefOrTrue = (val: boolean | null): boolean =>
  val === undefined || val;
