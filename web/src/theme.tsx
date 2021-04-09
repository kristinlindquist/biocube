// https://github.com/mui-org/material-ui/issues/13394
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    red: PaletteColor;
    orange: PaletteColor;
    green: PaletteColor;
    teal: PaletteColor;
    blue: PaletteColor;
    indigo: PaletteColor;
    purple: PaletteColor;
  }

  interface PaletteOptions {
    red?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    green?: PaletteColorOptions;
    teal?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    indigo?: PaletteColorOptions;
    purple?: PaletteColorOptions;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#546e7a',
    },
    secondary: {
      main: '#5c6bc0',
    },
    red: {
      main: '#7E191B',
    },
    orange: {
      main: '#7E191B',
    },
    green: {
      main: '#1f9f5c',
    },
    teal: {
      main: '#4faba8',
    },
    blue: {
      // veryLight: '#d7e5f1',
      light: '#76b0e5',
      main: '#2880d0',
      dark: '#1b588e',
      // veryDark: '#0f2f4c',
    },
    indigo: {
      main: '#5a5db3',
    },
    purple: {
      main: '#845ab3',
    },
  },
  typography: {
    h1: {
      fontSize: '2.643rem',
    },
    h2: {
      fontSize: '2.071rem',
    },
    h3: {
      fontSize: '1.643rem',
    },
    h4: {
      fontSize: '1.286rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.786rem',
    },
    fontFamily: ['Avenir-Book', 'Arial'].join(','),
  },
});

export default {
  ...theme,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: 0.5,
        },
        label: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(2),
          minWidth: '130px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: 'initial',
        },
      },
    },
  },
};
