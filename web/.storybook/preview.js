import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { addDecorator } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from 'theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
));

addDecorator((story) => <Router>{story()}</Router>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
