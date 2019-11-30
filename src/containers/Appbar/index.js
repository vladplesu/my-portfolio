import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../../components/Navbar';
import BottomAppBar from '../../components/BottomAppBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <Navbar />
      </Hidden>
      <Hidden smUp>
        <BottomAppBar />
      </Hidden>
    </div>
  );
};
