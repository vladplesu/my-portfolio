import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Layout(props) {
  const { classes } = props;
  const { children } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        {/* TODO: Add MyAppBar component */}
        {children}
        {/* TODO: Add Footer component */}
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
