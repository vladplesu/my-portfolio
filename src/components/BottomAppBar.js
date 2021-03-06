import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import GetAppIcon from '@material-ui/icons/GetApp';
import MyDrawer from './MyDrawer';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Fab
          color='secondary'
          aria-label='add'
          className={classes.fabButton}
          href='/resume.pdf'>
          <GetAppIcon />
        </Fab>
      </Toolbar>
      <MyDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
}
