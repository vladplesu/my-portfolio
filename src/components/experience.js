import React from 'react';
import { Typography } from '@material-ui/core';
import MyCard from './card';
import Section from './section';

// Add function MyExp
function MyExp() {
  // TODO: Add list with experience
  return (
    <Section>
      <Typography variant="headline" color="secondary" gutterBottom>
        My Experience
      </Typography>
      <MyCard cardTitle="FreeCodeCamp" />
      <MyCard cardTitle="Digital Nation" />
      <MyCard cardTitle="CS50" />
    </Section>
  );
}

// Add Export component
export default MyExp;
