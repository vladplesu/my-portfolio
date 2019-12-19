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
    const anchor = event.currentTarget.querySelector('a');
    const to = anchor.innerText.toLowerCase();
    const anchorTarget = document.getElementById(`${to}-section`);
    const top = anchorTarget.getBoundingClientRect().top;
    window.scrollBy({ behavior: 'smooth', top });
    toggleDrawer();
  };

  return (
    <div>
      <Drawer anchor='bottom' open={isOpen} onClose={toggleDrawer}>
        <div className={classes.fullList}>
          <List>
            {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map(
              text => (
                <ListItem button key={text} onClick={handleClick}>
                  <ListItemText
                    className={classes.listItem}
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
