import { camelCase, get, sortBy } from 'lodash';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import { Logger } from 'logger';
import {
  ContentType,
  DynamicDefType,
  FieldType,
  IdType,
  KeyValuePairs,
} from 'types';
import * as gql from 'gql';

export const sortByColumn = (
  row: KeyValuePairs,
  cols: Partial<DynamicDefType>[],
): Array<[IdType, KeyValuePairs]> =>
  sortBy(
    Object.entries(row),
    ([id]) =>
      (cols.find(({ id: colId }) => colId.split('.')[0] === id) || {})
        .listOrder,
  );

/**
 * Is value undefined or true?
 */
export const undefOrTrue = (val: boolean | undefined): boolean =>
  val === undefined || val;

/**
 * Get object value by key (shallow)
 */
export const getStartsWith = (obj: KeyValuePairs, str: string): KeyValuePairs =>
  Object.entries(obj).find(([k]) => k.startsWith(str))[1];

export const getFirstNonString = (obj: KeyValuePairs): KeyValuePairs =>
  Object.values(obj).find((v) => typeof v !== 'string');

/**
 * Case-insensitive look for document
 */
export const getDocument = (docName: string): DocumentNode => {
  const key = Object.keys(gql).find(
    (k) => docName.toLowerCase() === k.toLowerCase(),
  );
  return gql[key];
};

/**
 * Get gql query and entity based on document name
 * (e.g. getMeasures and measures from GetMeasuresQuery)
 */
export const getQueryAndEntity = (
  docName: string,
): { queryName: string; entityName: string } => {
  const queryName = get(
    (get(getDocument(docName) as KeyValuePairs, 'definitions') || []).find(
      (d) => d.operation === 'query',
    ),
    'name.value',
  );
  const entityName = queryName ? camelCase(queryName.split('get')[1]) : null;

  return { queryName, entityName };
};

/**
 * Get gql entity path on docName (e.g. getIndications.indications)
 */
export const getEntityPath = (docName: string): string => {
  const { queryName, entityName } = getQueryAndEntity(docName);
  return `${queryName}.${entityName}`;
};

/**
 * Get field type from content type
 */
export const fieldFromContentType = (type: ContentType): FieldType => {
  switch (type) {
    case 'CHIPS':
    case 'DATAGRID':
    case 'TABLE':
      return 'multiple';
    case 'SUBTITLE':
    case 'TITLE':
    case 'TYPOGRAPHY':
      return 'string';

    default:
      return 'string';
  }
};

/**
 * Get as array, even if single value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asArray = (value: Array<any> | any): Array<any> =>
  Array.isArray(value) ? value : [value];

/**
 * Unwrap graphql data
 */
// TODO: fix this cheesy mess.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const unwrapGqlData = (data: KeyValuePairs): any => {
  try {
    return getFirstNonString(getFirstNonString(data));
  } catch (e) {
    Logger.warn(e);
  }
  return [];
};

/**
 * Object to return in gql (?)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getReturnObj = (data: KeyValuePairs, str: string): any =>
  getFirstNonString(getStartsWith(data, str));
