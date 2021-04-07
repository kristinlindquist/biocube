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
  type?: FieldType;
  update?: boolean;
};

export type RowType = { [key: string]: string | number | Date };

export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | JSONObject;
export type JSONObject = { [member: string]: JSONValue };
// export interface JSONArray extends Array<JSONValue> {}

export type IdType = string | number;

export type SelectOptionType = {
  id: IdType;
  name: string;
};

export type TextFieldType =
  | 'date'
  | 'dateTime'
  | 'element'
  | 'number'
  | 'string'
  | 'text';

const selectFieldTypes = ['single', 'multiple'] as const;
export type SelectFieldType = typeof selectFieldTypes[number];

export const isSelectFieldType = (value: string): value is SelectFieldType =>
  selectFieldTypes.indexOf(value as SelectFieldType) !== -1;

export type FieldType = TextFieldType | SelectFieldType;

// eslint-disable-next-line
export type KeyValuePairs = { [key: string]: any };
