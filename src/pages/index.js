import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Layout from '../components/layout';
import Hero from '../components/hero';
import AboutMe from '../components/about';
import MyExp from '../components/experience';
import theme from '../theme/theme';

export default () => (
  <MuiThemeProvider theme={theme}>
    {/* Add custom theme using MuiThemeProvider component */}
    <Layout>
      <Hero />
      {/* Add AboutMe component */}
      <AboutMe />
      {/* Add Experience component */}
      <MyExp />
      {/* TODO: Add Skills component */}
      {/* TODO: Add Education component */}
      {/* TODO: Add Portfolio component */}
      {/* TODO: Add Contact Component */}
    </Layout>
  </MuiThemeProvider>
);
