import { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { CookiesProvider } from 'react-cookie';

import App from 'App';
import theme from './theme';

const Root = (): ReactElement => (
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CookiesProvider>
);

export default Root;
