import { uniqBy } from 'lodash';
import { ApolloCache as Cache } from '@apollo/client';

import { KeyValuePairs } from 'types';
import { getReturnObj } from 'utils';

/**
 * Modify collection with new or updated entity.
 *
 * Note: queryName/entityName are for the collection call/entity.
 * respectively, e.g. GetDashboardGraphsQuery and DashboardGraphs
 */
const modifyCacheOnUpdate = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cache: Cache<any>,
  data: KeyValuePairs,
  queryName: string,
  entityName: string,
): boolean =>
  cache.modify({
    fields: {
      [queryName](existing = { [entityName]: [] }) {
        return Array.isArray(existing[entityName])
          ? {
              [entityName]: uniqBy(
                [
                  ...existing[entityName],
                  { __ref: cache.identify(getReturnObj(data, 'upsert')) },
                ],
                '__ref',
              ),
            }
          : {
              [entityName]: {
                __ref: cache.identify(getReturnObj(data, 'upsert')),
              },
            };
      },
    },
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modifyCacheOnDelete = (cache: Cache<any>, data: KeyValuePairs): boolean =>
  cache.evict({
    id: cache.identify(getReturnObj(data, 'delete')),
  });

export { modifyCacheOnDelete, modifyCacheOnUpdate };
