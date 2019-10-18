import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#2c2c2c',
      dark: '#000'
    },
    secondary: {
      main: '#ffbd39',
      light: '#ffef6c',
      dark: '#c78d00'
    }
  }
});

export default theme;
