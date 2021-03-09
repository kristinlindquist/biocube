import { ReactElement } from 'react';
import moment from 'moment';

import { TextField } from '@material-ui/core';

export interface PickerProps {
  /**
   * a class
   */
  className: string;
  /**
   * a date
   */
  date: Date;
  /**
   * an id for the field
   */
  id: string;
  /**
   * a label
   */
  label?: string | null;
  /**
   * onchange
   */
  onChange: (date: string) => null;
  /**
   * Picker type
   */
  type: 'date' | 'datetime-local' | 'time';
}

const getValue = (date: Date, type: 'date' | 'datetime-local' | 'time') => {
  switch (type) {
    case 'time':
      return moment(new Date(date)).format('HH:mm'); // TODO: time expects AM/PM (A)
    case 'datetime-local':
      return moment(new Date(date)).format('yyyy-MM-DDTHH:mm');
    default:
      return moment(new Date(date)).format('yyyy-MM-DD');
  }
};
/**
 * A date picker
 *
 * TODO: update when MUI5 is out.
 */
const Picker = ({
  date,
  id = 'date',
  label,
  onChange,
  type = 'date',
  ...props
}: PickerProps): ReactElement => (
  <TextField
    {...props}
    id={id}
    InputLabelProps={{
      shrink: true,
    }}
    label={label || id}
    onChange={(e) => onChange(e.target.value)}
    value={getValue(date, type)}
    type={type}
  />
);

export default Picker;
