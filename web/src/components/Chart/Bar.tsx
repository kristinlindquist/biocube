import { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import { ResponsiveBar, BarDatum } from '@nivo/bar';

import { ChartProps } from 'types';
import { getDefaultLegend } from 'components/Chart/utils';

interface BarChartProps extends ChartProps {
  /**
   * Chart data
   */
  data: BarDatum[];
  /**
   * Data keys
   */
  keys: string[];
}

/**
 * A bar chart
 */
const BarChart = ({
  chartProps = {},
  container,
  data,
  error = null,
  height = 400,
  keys,
  loading = false,
  subtitle,
  title,
}: BarChartProps): ReactElement => {
  const Container = container || Box;

  return (
    <Container height={height} mt={2} subtitle={subtitle} title={title}>
      {loading && <Skeleton variant="rect" width="100%" height={height} />}
      {error && <Alert severity="error">{error.message}</Alert>}
      <ResponsiveBar
        animate
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: 'minutes',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        axisRight={null}
        axisTop={null}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        colors={{ scheme: 'paired' }}
        data={data}
        indexBy="day"
        keys={keys}
        labelTextColor="transparent"
        legends={[{ ...getDefaultLegend(), dataFrom: 'keys' }]}
        margin={{ top: 40, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        {...chartProps}
      />
    </Container>
  );
};

export default BarChart;
