import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#29b6f6',
      light: '#73e8ff',
      dark: '#0086c3'
    },
    secondary: {
      main: '#ffbd39',
      light: '#ffef6c',
      dark: '#c78d00'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  }
});

export default theme;
