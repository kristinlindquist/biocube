import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';

import Home from 'containers/Home';
import DynamicPages from 'containers/DynamicPages';
import QueryBuilder from 'containers/QueryBuilder';
import { getApolloClient } from 'gql';
import theme from './theme';

const client = getApolloClient();

const CUBE_API_URL = 'http://localhost:4343';
const cubejsApi = cubejs({ apiUrl: `${CUBE_API_URL}/cubejs-api/v1` });

const App = (): ReactElement => (
  <CubeProvider cubejsApi={cubejsApi}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/qb">
              <QueryBuilder />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <DynamicPages />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </CubeProvider>
);

export default App;
