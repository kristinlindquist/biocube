import { ReactElement } from 'react';
import moment from 'moment';

const monthDay = 'MMM D';
const longDate = 'MMMM D, YYYY';

export const getLongDate = (date: Date): string =>
  moment(new Date(date)).format(longDate).toString();

export const LongDate = ({ date }: { date: Date }): ReactElement => (
  <>{getLongDate(date)}</>
);

export const getMonthDay = (date: Date): string =>
  moment(new Date(date)).format(monthDay).toString();

export const MonthDay = ({ date }: { date: Date }): ReactElement => (
  <>{getMonthDay(date)}</>
);
