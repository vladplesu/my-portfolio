import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

function MyDrawer(props) {
  const { classes } = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        {['About', 'Experience', 'Skills & Education', 'Portfolio', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open>
        {sideList}
      </Drawer>
    </div>
  );
}


MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyDrawer);
