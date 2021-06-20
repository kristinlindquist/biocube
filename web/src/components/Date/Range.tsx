import { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import { useDateRange } from 'contexts';
import Picker from './Picker';

const useStyles = makeStyles((theme: Theme) => ({
  picker: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

export interface RangeProps {
  /**
   * picker type
   */
  type: 'date' | 'datetime-local' | 'time';
}

/**
 * A date range picker
 */
const Range = ({ type = 'date' }: RangeProps): ReactElement => {
  const classes = useStyles();
  const [{ start, end }, { setEnd, setStart }] = useDateRange();

  return (
    <Box display="flex">
      <Picker
        className={classes.picker}
        date={start}
        id="start"
        onChange={setStart}
        type={type}
      />
      <Picker
        className={classes.picker}
        date={end}
        id="end"
        onChange={setEnd}
        type={type}
      />
    </Box>
  );
};

export default Range;
