import { ReactElement } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, LinearProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ResponsiveBullet, Datum } from '@nivo/bullet';

import { ErrorMessage } from 'types';

interface ChartProps {
  /**
   * "Bullet" chart data
   */
  data: Datum[];
  /**
   * error
   */
  error: ErrorMessage | null;
  /**
   * Is page loading?
   */
  loading: boolean;
}

/**
 * A Timeline chart
 */
const Timeline = ({
  data,
  error = null,
  loading = false,
}: ChartProps): ReactElement => {
  const theme = useTheme();

  return (
    <Box height={150}>
      {loading && <LinearProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
      <ResponsiveBullet
        rangeColors={[theme.palette.primary.main, theme.palette.red.main]}
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-50}
        measureSize={0.2}
      />
    </Box>
  );
};

export default Timeline;
