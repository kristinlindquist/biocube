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
import { useCookies } from 'react-cookie';

import Logger from 'logger';

const COOKIE_NAME = process.env.REACT_APP_COOKIE_ID;
const HOST = 'localhost:4000';
const PATH = 'graphql';
const LOGOUT_CODES = ['FORBIDDEN'];

const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const [, , removeCookie] = useCookies();
  const httpLink = new HttpLink({ uri: `http://${HOST}/${PATH}` });

  const wsLink = new WebSocketLink({
    uri: `ws://${HOST}/${PATH}`,
    options: { reconnect: true },
  });

  const omitTypename = (key: string, value: number | string | null) =>
    key === '__typename' ? undefined : value;

  const cleanTypeName = new ApolloLink((operation, forward) => {
    const op = operation;
    if (op.variables) {
      op.variables = JSON.parse(JSON.stringify(op.variables), omitTypename);
    }
    return forward(op);
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

  const logout = () => removeCookie(COOKIE_NAME);

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(
            ({ extensions: { code }, locations, message, path }) => {
              if (LOGOUT_CODES.includes(code)) {
                logout();
              }
              Logger.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
              );
            },
          );
          return;
        }

        if (networkError) {
          Logger.warn(`[Network error]: ${networkError}`);
        }
      }),
      cleanTypeName,
      link,
    ]),
    cache: new InMemoryCache(),
  });

  return client;
};

export { getApolloClient };
export * from './typed-document-nodes';
