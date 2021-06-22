import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import theme from 'theme';

export const decorators = [
  (Story) => (
    <Router>
      <Story />
    </Router>
  ),
  (Story) => (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </EmotionThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
