import { ElementType, ReactElement } from 'react';

export interface ErrorMessage {
  message: string;
}

export interface ChartProps {
  /**
   * props to pass along to chart
   */
  chartProps?: Record<string, unknown>;
  /**
   * Container component, e.g. Card. Defaults to Box.
   */
  container?: ElementType;
  /**
   * error
   */
  error?: ErrorMessage | null;
  /**
   * container height
   */
  height?: number;
  /**
   * Is page loading?
   */
  loading?: boolean;
  /**
   * Card subtitle
   */
  subtitle?: string | ReactElement;
  /**
   * Card title
   */
  title?: string | ReactElement;
}

export type ColumnType = {
  create?: boolean;
  id: string;
  flex?: number | null;
  name: string;
  options?: Array<{ id: string | number; name: string }>;
  type?:
    | 'element'
    | 'date'
    | 'dateTime'
    | 'number'
    | 'multiple'
    | 'string'
    | 'text';
  update?: boolean;
};
