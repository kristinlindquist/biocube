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