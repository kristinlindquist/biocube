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
  seriesNames: () => Array<{ key: string; title: string }>;
  tableColumns: () => Array<{ key: string; shortTitle: string; type: string }>;
  tablePivot: () => Array<{
    id?: string;
    [key: string]: PrimitiveType;
  }>;
  totalRow: () => { x: string; xValues: string[] };
};

export type EchartsParam = { dataIndex: number; encode: { y: number[] } };

export type EchartsApi = {
  coord: (arr: [number, number]) => Array<number>;
  size: (arr: [number, number]) => number;
  value: (number) => number;
};

export type EchartsRenderItemProps = {
  children: Array<{
    shape: { x1: number; x2: number; y1: number; y2: number };
    transition: string[];
    type: string;
  }>;
  type: string;
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
