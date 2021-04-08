import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import appStyles from './appStyles';
import muiStyles, { overridesMuiStyles } from './muiStyles';
import { defaults } from 'config/defaults';

const applyTheme = (theme = defaults.theme) => {
  let fullTheme;

  if (theme === 'dark') {
    let muiDark = createMuiTheme({ ...muiStyles.dark, ...overridesMuiStyles });
    muiDark = responsiveFontSizes(muiDark);
    fullTheme = { ...muiDark, ...appStyles.dark };
  } else {
    let muiLight = createMuiTheme({
      ...muiStyles.light,
      ...overridesMuiStyles,
    });
    muiLight = responsiveFontSizes(muiLight);
    fullTheme = { ...muiLight, ...appStyles.light };
  }
  return fullTheme;
};
export default applyTheme;
