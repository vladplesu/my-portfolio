import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import MyCard from '../../components/card';
import Section from '../../components/section';

// Add function MyExp
function MyExp() {
  // TODO: Add list with experience
  return (
    <Section id="experience">
      <Typography variant="headline" color="secondary" gutterBottom>
        My Experience
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm>
          <MyCard cardTitle="FreeCodeCamp" />
        </Grid>
        <Grid item xs={12} sm>
          <MyCard cardTitle="Digital Nation" />
        </Grid>
        <Grid item xs={12} sm>
          <MyCard cardTitle="CS50" />
        </Grid>
      </Grid>
    </Section>
  );
}

// Add Export component
export default MyExp;
