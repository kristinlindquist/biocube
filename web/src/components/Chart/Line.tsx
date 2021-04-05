import { ReactElement } from 'react';
import { Alert, Box, Skeleton } from '@material-ui/core';
import { ResponsiveLine, Serie } from '@nivo/line';

import { ChartProps } from 'types';
import { getDefaultLegend } from 'components/Chart/utils';

interface LineChartProps extends ChartProps {
  /**
   * Chart data
   */
  data: Serie[];
}

/**
 * A line chart
 */
const LineChart = ({
  chartProps = {},
  container,
  data,
  error = null,
  height = 400,
  loading = false,
  subtitle,
  title,
}: LineChartProps): ReactElement => {
  const Container = container || Box;

  return (
    <Container height={height} mt={2} subtitle={subtitle} title={title}>
      {loading && (
        <Skeleton height={height} variant="rectangular" width="100%" />
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
      <ResponsiveLine
        areaOpacity={0.05}
        animate
        axisBottom={{
          format: '%a %I:%M %p',
          legendOffset: -12,
        }}
        colors={{ scheme: 'category10' }}
        curve="monotoneX"
        data={data}
        enableArea
        legends={[getDefaultLegend()]}
        margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
        pointSize={5}
        pointBorderColor="#fff"
        pointBorderWidth={1}
        useMesh
        xFormat="time:%Y-%m-%d %H:%M"
        xScale={{
          type: 'time',
          format: '%Y-%m-%d %H:%M',
          useUTC: false,
        }}
        yScale={{
          type: 'linear',
          stacked: false,
        }}
        {...chartProps}
      />
    </Container>
  );
};

export default LineChart;
