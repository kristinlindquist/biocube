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
  chartType?: string;
  updateChartType?: (chartType: any) => void;
}

const SelectChartType = ({ chartType, updateChartType }: SelectChartProps) => (
  <Select
    defaultValue={[chartType]}
    label="Chart Type"
    onSelect={(selections) => updateChartType(selections[0].name)}
    options={ChartTypes}
  />
);

export default SelectChartType;
