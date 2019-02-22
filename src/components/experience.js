import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import MyCard from './card';

// TODO: Add custom styles variable
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `0 ${theme.spacing.unit * 3.5}px`,
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    minWidth: 275,
  },
});

// Add function MyExp
function MyExp(props) {
  const { classes } = props;
  // TODO: Add list with experience
  return (
    <section className={classes.root}>
      <Typography variant="headline" color="secondary" gutterBottom>
        My Experience
      </Typography>
      <MyCard cardTitle="FreeCodeCamp" />
      <MyCard cardTitle="Digital Nation" />
      <MyCard cardTitle="CS50" />
    </section>
  );
}
// Add propTypes
MyExp.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Add Export component
export default withStyles(styles)(MyExp);
