import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Layout from '../containers/Main';
import Hero from '../containers/Hero';
import About from '../containers/About';
import Experience from '../containers/Experience';
import Skills from '../containers/Skills';
import theme from '../theme/theme';

export default () => (
  <MuiThemeProvider theme={theme}>
    {/* Add custom theme using MuiThemeProvider component */}
    <Layout>
      <Hero />
      {/* Add AboutMe component */}
      <About />
      <Divider variant="middle" />
      {/* Add Experience component */}
      <Experience />
      <Divider variant="middle" />
      {/* TODO: Add Skills component */}
      <Skills />
      <Divider variant="middle" />
      {/* TODO: Add Education component */}
      {/* TODO: Add Portfolio component */}
      {/* TODO: Add Contact Component */}
    </Layout>
  </MuiThemeProvider>
);
