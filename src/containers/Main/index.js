import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyAppBar from '../Appbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
    paddingTop: '69px',
  },
});

function Layout(props) {
  const { classes } = props;
  const { children } = props;

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        {/* Add MyAppBar component */}
        <MyAppBar />
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
