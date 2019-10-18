import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomAppBar from '../components/BottomAppBar';
import theme from '../theme';

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BottomAppBar />
  </ThemeProvider>
);
