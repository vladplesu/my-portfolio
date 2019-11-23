import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';
// import MyDrawer from '../../components/drawer';
import Navbar from '../../components/Navbar';
import { Hidden, Fab } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    border: `3px solid ${theme.palette.primary.contrastText}`,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
});

class MyAppBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    // const { left } = this.state;

    return (
      <div className={classes.root}>
        <Hidden smDown>
          {/**
           <AppBar position='fixed' color='primary'>
             <Toolbar className={classes.toolbar}>
               <MyDrawer
                 isOpen={left}
                 isClosed={this.toggleDrawer('left', false)}
               />
               <IconButton
                 className={classes.menuButton}
                 onClick={this.toggleDrawer('left', true)}
                 color='inherit'
                 aria-label='Menu'>
                 <MenuIcon />
               </IconButton>
               <Link href='/' color='inherit' underline='none'>
                 <Typography
                   className={classes.logo}
                   variant='h4'
                   color='inherit'>
                   vPl
                 </Typography>
               </Link>
             </Toolbar>
           </AppBar>
           */}
          <Navbar />
        </Hidden>
        <Hidden mdUp>
          <AppBar position='fixed' color='primary' className={classes.appBar}>
            <Toolbar>
              <IconButton edge='start' color='inherit'>
                <MenuIcon />
              </IconButton>
              <Fab className={classes.fabButton} color='secondary'>
                <GetAppIcon />
              </Fab>
            </Toolbar>
          </AppBar>
        </Hidden>
      </div>
    );
  }
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyAppBar);
