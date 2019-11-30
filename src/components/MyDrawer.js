import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({
  fullList: {
    width: 'auto'
  },
  listItem: {
    textAlign: 'center',
    textTransform: 'capitalize'
  }
}));

export default ({ isOpen, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer anchor='bottom' open={isOpen} onClose={toggleDrawer}>
        <div className={classes.fullList}>
          <List>
            {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map(
              text => (
                <ListItem button key={text} onClick={toggleDrawer}>
                  <ListItemText className={classes.listItem}>
                    <Link
                      href={`#${text}-section`}
                      underline='none'
                      color='textPrimary'>
                      {text}
                    </Link>
                  </ListItemText>
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
