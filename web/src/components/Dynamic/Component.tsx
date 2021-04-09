import { ReactElement, useState } from 'react';
import { uniqBy } from 'lodash';
import { useMutation, useQuery } from '@apollo/client';
import { Alert } from '@material-ui/core';

import ErrorBoundary from 'ErrorBoundary';
import { DataGrid, Table } from 'components/Table';
import { JSONObject, RowType } from 'types';
import { getFirstNonString, getQueryAndEntity, getStartsWith } from 'utils';
import {
  GetMeasureDocument,
  GetMeasuresDocument,
  UpsertMeasureDocument,
  DeleteMeasureDocument,
  GetIndicationDocument,
  GetIndicationsDocument,
  UpsertIndicationDocument,
  DeleteIndicationDocument,
} from 'gql';
import { Logger } from 'logger';

const DocumentMap = {
  GetMeasureDocument,
  GetMeasuresDocument,
  UpsertMeasureDocument,
  DeleteMeasureDocument,
  GetIndicationDocument,
  GetIndicationsDocument,
  UpsertIndicationDocument,
  DeleteIndicationDocument,
};

// TODO: fix this cheesy mess.
const unwrapData = (data): RowType[] => {
  try {
    return getFirstNonString(getFirstNonString(data)) as RowType[];
  } catch (e) {
    Logger.warn(e);
  }
  return [];
};

const getReturnObj = (
  data: { [any: string]: { [any: string]: string | number } },
  str: string,
) => getFirstNonString(getStartsWith(data, str));

export interface ComponentProps {
  /**
   * Delete function
   */
  delete?: {
    document: string;
  };
  /**
   * Properties
   */
  props?: JSONObject;
  /**
   * Query function
   */
  read?: {
    document: string;
    parameters: JSONObject;
  };
  /**
   * Upsert function
   */
  upsert?: {
    document: string;
  };
  /**
   * Component types
   */
  type: 'DATAGRID' | 'TABLE';
}

/**
 * Generic component
 */
const Component = ({
  delete: del,
  props,
  read,
  upsert,
  type,
}: ComponentProps): ReactElement => {
  const [error, setError] = useState(null);
  const { queryName, entityName } = getQueryAndEntity(read.document);

  const { data } = useQuery(DocumentMap[read.document], {
    variables: { input: read.parameters },
  });

  /**
   * Mutation with convoluted effort of adding to list if it doesn't already
   * exist.
   */
  const [mutate] = upsert
    ? useMutation(DocumentMap[upsert.document], {
        onError: (e) => {
          setError(e);
          Logger.error(e);
        },
        update(cache, { data: d }) {
          cache.modify({
            fields: {
              [queryName](existing = { [entityName]: [] }) {
                return {
                  [entityName]: uniqBy(
                    [
                      ...existing[entityName],
                      { __ref: cache.identify(getReturnObj(d, 'upsert')) },
                    ],
                    '__ref',
                  ),
                };
              },
            },
          });
        },
      })
    : [undefined];

  /**
   * Delete mutation with cache eviction.
   */
  const [deleteMutation] = del
    ? useMutation(DocumentMap[del.document], {
        update(cache, { data: d }) {
          cache.evict({
            id: cache.identify(getReturnObj(d, 'delete')),
          });
        },
      })
    : [undefined];

  if (!data) {
    return null;
  }

  let component = <span />;

  switch (type) {
    case 'DATAGRID':
      component = (
        <DataGrid
          {...props}
          deleteMutation={deleteMutation}
          mutation={mutate}
          rows={unwrapData(data)}
        />
      );
      break;
    case 'TABLE':
      component = (
        <Table
          {...props}
          deleteMutation={deleteMutation}
          mutation={mutate}
          rows={unwrapData(data)}
        />
      );
      break;
    default:
      component = <span />;
  }

  return (
    <ErrorBoundary>
      {error && (
        <Alert onClose={() => setError(null)} severity="error" sx={{ mb: 1 }}>
          {error.message}
        </Alert>
      )}
      {component}
    </ErrorBoundary>
  );
};

export default Component;
