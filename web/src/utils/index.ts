import moment from 'moment';
import { get } from 'lodash';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as gql from 'gql';

export const unixYearRange = {
  start: new Date(moment().startOf('year').unix() * 1000),
  end: new Date(moment().startOf('year').add(3, 'months').unix() * 1000), // TODO: make 1 year
};

/**
 * Is value undefined or true?
 */
export const undefOrTrue = (val: boolean | undefined): boolean =>
  val === undefined || val;

/**
 * Get object value by key (shallow)
 */
export const getStartsWith = (
  obj: { [any: string]: unknown },
  str: string,
): { [any: string]: any } =>
  Object.entries(obj).find(([k]) => k.startsWith(str))[1];

export const getFirstNonString = (obj: {
  [any: string]: any;
}): { [any: string]: any } =>
  Object.values(obj).find((v) => typeof v !== 'string');

/**
 * Get gql query and entity based on document name
 * (e.g. getMeasures and measures from GetMeasuresQuery)
 */
export const getQueryAndEntity = (
  docName: string,
): { queryName: string; entityName: string } => {
  const queryName = get(
    (get(gql[docName], 'definitions') || []).find(
      (d) => d.operation === 'query',
    ),
    'name.value',
  );
  const entityName = queryName.split('get')[1].toLowerCase();

  return { queryName, entityName };
};

/**
 * Get gql entity path on docName (e.g. getIndications.indications)
 */
export const getEntityPath = (docName: string): string => {
  const { queryName, entityName } = getQueryAndEntity(docName);
  return `${queryName}.${entityName}`;
};

export const getDocument = (docName: string): DocumentNode => gql[docName];
