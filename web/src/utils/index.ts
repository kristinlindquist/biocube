import moment from 'moment';

export const unixYearRange = {
  start: new Date(moment().startOf('year').unix() * 1000),
  end: new Date(moment().startOf('year').add(3, 'months').unix() * 1000), // TODO: make 1 year
};

export const undefOrTrue = (val: boolean | null): boolean =>
  val === undefined || val;

export const getStartsWith = (
  obj: { [any: string]: unknown },
  str: string,
): { [any: string]: any } =>
  Object.entries(obj).find(([k]) => k.startsWith(str))[1];

export const getFirstNonString = (obj: {
  [any: string]: any;
}): { [any: string]: any } =>
  Object.values(obj).find((v) => typeof v !== 'string');
