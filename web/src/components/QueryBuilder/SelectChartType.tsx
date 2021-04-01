import { ReactElement } from 'react';
import { ChartType } from '@cubejs-client/react';

import { Select } from 'components/Inputs';

const ChartTypes = [
  { id: 'line', name: 'Line', icon: 'line-chart' },
  { id: 'area', name: 'Area', icon: 'area-chart' },
  { id: 'bar', name: 'Bar', icon: 'bar-chart' },
  { id: 'pie', name: 'Pie', icon: 'pie-chart' },
  { id: 'table', name: 'Table', icon: 'table' },
  { id: 'number', name: 'Number', icon: 'info-circle' },
];

export interface SelectChartProps {
  /**
   * chartType
   */
  chartType?: ChartType;
  /**
   * function to update chart type
   */
  updateChartType: (chartType: ChartType) => void;
}

const SelectChartType = ({
  chartType,
  updateChartType,
}: SelectChartProps): ReactElement => (
  <Select
    defaultValue={[chartType]}
    emptyOption={false}
    label="Chart Type"
    onSelect={(selections) => updateChartType(selections[0].id)}
    options={ChartTypes}
  />
);

export default SelectChartType;
