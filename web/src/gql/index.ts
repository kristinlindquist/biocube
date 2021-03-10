import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  split,
  ApolloLink,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';

import Logger from 'logger';

const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: { reconnect: true },
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) =>
            Logger.warn(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        }

        if (networkError) {
          Logger.warn(`[Network error]: ${networkError}`);
        }
      }),
      link,
    ]),
    cache: new InMemoryCache(),
  });

  return client;
};

export { getApolloClient };
export * from './operations';
