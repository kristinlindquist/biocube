import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';

import ErrorBoundary from 'ErrorBoundary';
import Home from 'containers/Home';
import DynamicPages from 'containers/DynamicPages';
import QueryBuilder from 'containers/QueryBuilder';
import { getApolloClient } from 'gql';

const CUBE_API_URL = 'http://localhost:4343';
const cubejsApi = cubejs({ apiUrl: `${CUBE_API_URL}/cubejs-api/v1` });

const App = (): ReactElement => {
  const client = getApolloClient();

  return (
    <CubeProvider cubejsApi={cubejsApi}>
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path="/qb">
                <QueryBuilder />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/">
                <DynamicPages />
              </Route>
            </Switch>
          </Router>
        </ErrorBoundary>
      </ApolloProvider>
    </CubeProvider>
  );
};

export default App;
