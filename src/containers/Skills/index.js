import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, withStyles } from '@material-ui/core';

import Section from '../../components/section';
import Icons from '../../components/Icons';

const style = {
  gridItem: {
    textAlign: 'center',
  },
};

// TODO: Add function Skills
function Skills(props) {
  const { classes } = props;
  return (
    <Section id="skills">
      <Typography variant="headline" color="secondary">
        My Skills
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm className={classes.gridItem}>
          <Icons icon="html5" stopOffsetTop="0.1" stopOffsetBottom="0.5" colorFill="#e44d26" />
          <Typography variant="h6">HTML</Typography>
        </Grid>
        <Grid item xs={12} sm className={classes.gridItem}>
          <Icons icon="css3" stopOffsetTop="0.4" stopOffsetBottom="0.6" colorFill="#0073B1" />
          <Typography variant="h6">CSS</Typography>
        </Grid>
        <Grid item xs={12} sm className={classes.gridItem}>
          <Icons icon="js" stopOffsetTop="0.6" stopOffsetBottom="0.8" colorFill="#f7df1e" />
          <Typography variant="h6">Javascript</Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

Skills.prototype = {
  classes: PropTypes.object.isRequired,
};

// TODO: Export component
export default withStyles(style)(Skills);
