import cuid from 'cuid';
import moment, { Moment } from 'moment';

const getRangeOfDates = (start: Date, end: Date, key: string = 'day') =>
  _getRangeOfDates(moment(start), moment(end), key);

const _getRangeOfDates = (
  start: Moment,
  end: Moment,
  key,
  array: Array<Moment> = [start.startOf(key)],
) => {
  if (start.isAfter(end)) {
    throw new Error('start must precede end');
  }

  const next = start.add(1, key).startOf(key).clone();
  return next.isAfter(end, key)
    ? array
    : _getRangeOfDates(next, end, key, [...array, next]);
};

const generateId = (prefix?: string): string => {
  const generatedId = cuid();
  return `${prefix}${generatedId}`;
};

export { getRangeOfDates, generateId };
export * from './logger';
