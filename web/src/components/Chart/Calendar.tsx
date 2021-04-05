import { ReactElement } from 'react';
import moment from 'moment';
import { useTheme } from '@material-ui/core/styles';
import { Alert, Box, Skeleton } from '@material-ui/core';
import { CalendarDatum, ResponsiveCalendar } from '@nivo/calendar';

import { ChartProps } from 'types';

interface CalendarProps extends ChartProps {
  /**
   * Chart data
   */
  data: CalendarDatum[];
  /**
   * Upon clicking on day square
   */
  onClick?: (day: string) => void;
}

/**
 * A line chart
 */
const Calendar = ({
  chartProps = {},
  data,
  error = null,
  height = 180,
  loading = false,
  onClick = () => null,
}: CalendarProps): ReactElement => {
  const theme = useTheme();

  return (
    <Box height={height} justifyContent="center" width="100%">
      {loading && (
        <Skeleton height={height} variant="rectangular" width="100%" />
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
      <ResponsiveCalendar
        colors={[
          theme.palette.grey['200'],
          theme.palette.grey['300'],
          theme.palette.grey['400'],
          theme.palette.blue.light,
          theme.palette.blue.main,
          theme.palette.blue.dark,
        ]}
        data={data}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        emptyColor="#eeeeee"
        from={moment().startOf('year').add(1, 'day').format('yyyy-MM-DD')}
        margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
        monthBorderColor="#ffffff"
        onClick={({ day }: { day: string }) => onClick(day)}
        to={moment().endOf('year').utc().format('yyyy-MM-DD')}
        yearLegend={() => ''}
        {...chartProps}
      />
    </Box>
  );
};

export default Calendar;
