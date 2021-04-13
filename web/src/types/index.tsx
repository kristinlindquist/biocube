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

export type DynamicDefType = {
  create?: boolean;
  id: string;
  listOrder?: number;
  name: string;
  options?: Array<{ id: string | number; name: string }>;
  update?: boolean;
};

export type ColumnType = {
  type?: FieldType;
} & DynamicDefType;

export type ContentDefType = {
  props: KeyValuePairs;
  type: ContentType;
} & DynamicDefType;

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

export type ContentType =
  | 'CHIPS'
  | 'DATAGRID'
  | 'SUBTITLE'
  | 'TABLE'
  | 'TITLE'
  | 'TYPOGRAPHY';

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

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'inherit';
