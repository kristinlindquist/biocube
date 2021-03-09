import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

addDecorator((story) => <Router>{story()}</Router>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
