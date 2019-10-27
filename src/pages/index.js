import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from '../containers/Appbar';
import AboutWrapper from '../containers/About';
import ResumeWrapper from '../containers/Resume';
import SkillsWrapper from '../containers/Skills';
import ProjectsWrapper from '../containers/Projects';
import ContactsWrapper from '../containers/Contact';
import theme from '../theme';

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Appbar />
    <AboutWrapper />
    <ResumeWrapper />
    <SkillsWrapper />
    <ProjectsWrapper />
    <ContactsWrapper />
  </ThemeProvider>
);
