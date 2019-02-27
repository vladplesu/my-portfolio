import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Layout from '../containers/Main';
import Hero from '../containers/Hero';
import About from '../containers/About';
import Experience from '../containers/Experience';
import theme from '../theme/theme';

export default () => (
  <MuiThemeProvider theme={theme}>
    {/* Add custom theme using MuiThemeProvider component */}
    <Layout>
      <Hero />
      {/* Add AboutMe component */}
      <About />
      {/* Add Experience component */}
      <Experience />
      {/* TODO: Add Skills component */}
      {/* TODO: Add Education component */}
      {/* TODO: Add Portfolio component */}
      {/* TODO: Add Contact Component */}
    </Layout>
  </MuiThemeProvider>
);
