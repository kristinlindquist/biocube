import { ReactElement, ReactNode } from 'react';

export type LayoutType = 'horizontal' | 'vertical' | 'centric' | 'radial';

export type PrimitiveType = string | number | boolean;

export type ResultSet<Type> = {
  chartPivot: (any?) => Array<Type>;
  loadResponse?: {
    results: Array<{
      annotation: { measures: Array<{ [key: string]: string }> };
    }>;
  };
  seriesNames: () => Array<{ key: string; shortTitle: string }>;
  tableColumns: () => Array<{ key: string; shortTitle: string }>;
  tablePivot: () => Array<{
    id?: string;
    [key: string]: PrimitiveType;
  }>;
  totalRow: () => { x: string; xValues: string[] };
};

export interface ChartProps {
  /**
   * children
   */
  children?: (ReactNode | ReactElement)[];
  /**
   * chart component
   */
  // eslint-disable-next-line
  ChartComponent?: any;
  /**
   * chart height
   */
  height?: number;
  /**
   * where to place legend
   */
  legendLayout?: LayoutType;
  /**
   * resultSet
   */
  resultSet: ResultSet<string>;
}
