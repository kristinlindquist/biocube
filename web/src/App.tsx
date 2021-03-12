import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';

import Home from 'containers/Home';
import Measures from 'containers/Measures';
import { getApolloClient } from 'gql';
import theme from './theme';

const client = getApolloClient();

const App = (): ReactElement => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/measures">
            <Measures />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
