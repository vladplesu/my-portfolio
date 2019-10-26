import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#2c2c2c',
      dark: '#000'
    },
    secondary: {
      main: '#29b6f6',
      light: '#73e8ff',
      dark: '#0086c3'
    },
    text: {
      primary: '#fff',
      secondary: '#000',
      hint: '#a3a3a3'
    }
  }
});

export default theme;
