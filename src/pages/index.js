import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Layout from '../components/layout';
import MyAppBar from '../components/appBar';
import Hero from '../components/hero';
import AboutMe from '../components/about';

// Create custom theme using createMuiTheme method
const theme = createMuiTheme(
  {
    palette: {
      primary: { main: '#263238', contrastText: '#7ce3ff' },
      secondary: { main: '#7ce3ff', contrastText: '#000000' },
      text: { primary: '#fff' },
      divider: '#7ce3ff',
    },
  },
  'Outer Space Anakiwa Guinea',
);

export default () => (
  <MuiThemeProvider theme={theme}>
    {/* Add custom theme using MuiThemeProvider component */}
    <Layout>
      {/* TODO: Move MyAppBar component to Layout component */}
      <MyAppBar />
      <Hero />
      {/* Add AboutMe component */}
      <AboutMe />
      {/* TODO: Add Experience component */}
      {/* TODO: Add Skills component */}
      {/* TODO: Add Education component */}
      {/* TODO: Add Portfolio component */}
      {/* TODO: Add Contact Component */}
    </Layout>
  </MuiThemeProvider>
);
