import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 5,
  },
  subtitle: {
    marginBottom: theme.spacing.unit * 2,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItem: {
    textAlign: 'center',
  },
});

function MyDrawer(props) {
  const { classes } = props;
  const { isOpen } = props;
  const { isClosed } = props;

  const sideList = (
    <div className={classes.list}>
      <Typography className={classes.title} variant="h4" color="textPrimary" align="center">
        Vlad Plesu
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1" color="textSecondary" align="center">
        Front-end Developer
      </Typography>
      <Divider variant="middle" />
      <List>
        {['About', 'Experience', 'Skills', 'Education', 'Portfolio', 'Contact'].map((text, _index) => (
          <ListItem button key={text}>
            <ListItemText className={classes.listItem}>
              <Link href={'#'.concat(text.toLowerCase())} underline="none" color="textPrimary">
                {text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={isOpen} onClose={isClosed}>
        <div
          tabIndex={0}
          role="button"
          onClick={isClosed}
          onKeyDown={isClosed}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
}


MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isClosed: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MyDrawer);
