const muiTheme = {
  light: {
    themeName: 'light',
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Roboto',
        'Lato',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    mixins: {
      toolbar: {
        minHeight: 0,
      },
    },
    palette: {},
  },
  dark: {
    themeName: 'dark',
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Roboto',
        'Lato',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    mixins: {
      toolbar: {
        minHeight: 0,
      },
    },
    palette: {},
  },
};

/**
 * Object that contains all the overrides to the default Mui theme
 */
export const overridesMuiTheme = {};

export default muiTheme;
