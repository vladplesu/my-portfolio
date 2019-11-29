import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../containers/Main';
import Appbar from '../containers/Appbar';
import HomeWrapper from '../containers/Home';
import AboutWrapper from '../containers/About';
import ResumeWrapper from '../containers/Resume';
import SkillsWrapper from '../containers/Skills';
import ProjectsWrapper from '../containers/Projects';
import ContactsWrapper from '../containers/Contact';
import FooterWrapper from '../containers/Footer';
import theme from '../theme';

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Appbar />
      <HomeWrapper />
      <AboutWrapper />
      <ResumeWrapper />
      <SkillsWrapper />
      <ProjectsWrapper />
      <ContactsWrapper />
      <FooterWrapper />
    </Layout>
  </ThemeProvider>
);
