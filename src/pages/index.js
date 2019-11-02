import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from '../containers/Appbar';
import AboutWrapper from '../containers/About';
import ResumeWrapper from '../containers/Resume';
import SkillsWrapper from '../containers/Skills';
import ProjectsWrapper from '../containers/Projects';
import ContactsWrapper from '../containers/Contact';
import FooterWrapper from '../containers/Footer';
import theme from '../theme';
import { Box } from '@material-ui/core';

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box bgcolor={theme.palette.primary.main}>
      <Appbar />
      <AboutWrapper />
      <ResumeWrapper />
      <SkillsWrapper />
      <ProjectsWrapper />
      <ContactsWrapper />
      <FooterWrapper />
    </Box>
  </ThemeProvider>
);
