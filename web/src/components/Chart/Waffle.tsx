import { ReactElement } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ResponsiveWaffle } from '@nivo/waffle';

import { ErrorMessage } from 'types';

interface ChartProps {
  /**
   * Waffle data
   */
  data: Array<{
    id: string | number;
    value: number;
    label: string | number;
  }>;
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
 * A Waffle chart
 */
const WaffleChart = ({
  data,
  error = null,
  loading = false,
}: ChartProps): ReactElement => (
  <Box height={150}>
    {loading && <LinearProgress />}
    {error && <Alert severity="error">{error.message}</Alert>}
    <ResponsiveWaffle
      animate
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      // colors={{ scheme: 'nivo' }}
      columns={25}
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      motionStiffness={90}
      motionDamping={11}
      rows={5}
      total={20}
    />
  </Box>
);

export default WaffleChart;
