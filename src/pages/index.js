import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutWrapper from '../containers/About';
import ResumeWrapper from '../containers/Resume';
import theme from '../theme';

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AboutWrapper />
    <ResumeWrapper />
  </ThemeProvider>
);
