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

  const handleClick = event => {
    event.preventDefault();
    const to = event.target.innerText.toLowerCase();
    const anchorTarget = document.getElementById(`${to}-section`);
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    toggleDrawer();
  };

  return (
    <div>
      <Drawer anchor='bottom' open={isOpen} onClose={toggleDrawer}>
        <div className={classes.fullList}>
          <List>
            {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map(
              text => (
                <ListItem button key={text}>
                  <ListItemText
                    className={classes.listItem}
                    onClick={handleClick}
                    primary={
                      <Link underline='none' color='textPrimary'>
                        {text}
                      </Link>
                    }></ListItemText>
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
