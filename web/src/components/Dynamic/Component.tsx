import { ReactElement, useState } from 'react';
import { uniqBy } from 'lodash';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { Alert } from '@material-ui/core';

import ErrorBoundary from 'ErrorBoundary';
import { DataGrid, Table } from 'components/Table';
import { JSONObject } from 'types';
import { getReturnObj, getQueryAndEntity, unwrapGqlData } from 'utils';
import {
  GetDataTypeDocument,
  GetDataTypesDocument,
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
import Content from './Content';

const DocumentMap = {
  GetDataTypeDocument,
  GetDataTypesDocument,
  GetMeasureDocument,
  GetMeasuresDocument,
  UpsertMeasureDocument,
  DeleteMeasureDocument,
  GetIndicationDocument,
  GetIndicationsDocument,
  UpsertIndicationDocument,
  DeleteIndicationDocument,
};

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
   * Function to query for a single entity
   * (if read is a fetchMany)
   */
  readOne?: {
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
  type: 'CONTENT' | 'DATAGRID' | 'TABLE';
}

/**
 * A generic, metadata-driven component
 */
const Component = ({
  delete: del,
  props,
  read,
  readOne,
  upsert,
  type,
}: ComponentProps): ReactElement => {
  const { id } = useParams() as { id: string };
  const [error, setError] = useState(null);
  const { entityName, queryName } = getQueryAndEntity(read.document);

  const onError = (e) => {
    setError(e);
    Logger.error(e);
  };

  const { data } = useQuery(DocumentMap[read.document], {
    onError,
    variables: {
      input: {
        ...read.parameters,
        id: read.parameters.id ? Number(id) : undefined,
      },
    },
  });

  const [readOneFunc] = readOne
    ? useLazyQuery(DocumentMap[readOne.document])
    : [null];

  /**
   * Mutation with convoluted effort of adding to list if it doesn't already
   * exist.
   */
  const [mutate] = upsert
    ? useMutation(DocumentMap[upsert.document], {
        onError,
        update(cache, { data: d }) {
          cache.modify({
            fields: {
              [queryName](existing = { [entityName]: [] }) {
                return Array.isArray(existing[entityName])
                  ? {
                      [entityName]: uniqBy(
                        [
                          ...existing[entityName],
                          { __ref: cache.identify(getReturnObj(d, 'upsert')) },
                        ],
                        '__ref',
                      ),
                    }
                  : {
                      [entityName]: {
                        __ref: cache.identify(getReturnObj(d, 'upsert')),
                      },
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
        onError,
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

  const components = {
    CONTENT: (
      <Content
        {...props}
        data={unwrapGqlData(data)}
        deleteMutation={deleteMutation}
        mutation={mutate}
      />
    ),
    DATAGRID: (
      <DataGrid
        {...props}
        deleteMutation={deleteMutation}
        mutation={mutate}
        rows={unwrapGqlData(data)}
      />
    ),
    TABLE: (
      <Table
        {...props}
        deleteMutation={deleteMutation}
        mutation={mutate}
        readOne={readOneFunc}
        rows={unwrapGqlData(data)}
      />
    ),
  };

  const component = components[type] || <span />;

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
