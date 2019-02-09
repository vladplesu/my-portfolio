import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
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
  icon: {
    margin: 0,
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

class MyDrawer extends React.Component {
  componentDidMount() {
    loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.props;
    const { isClosed } = this.props;

    const sideList = (
      <div className={classes.list}>
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
          <Typography className={classes.title} variant="h4" color="textPrimary" align="center">
          Vlad Plesu
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle1" color="textSecondary" align="center">
          Front-end Developer
          </Typography>
          <Divider variant="middle" />
          <div
            tabIndex={0}
            role="button"
            onClick={isClosed}
            onKeyDown={isClosed}
          >
            {sideList}
          </div>
          <Divider variant="middle" />
          <div className={classes.media}>
            <IconButton className={classNames(classes.icon, 'fas fa-at')} color="primary" />
            <IconButton className={classNames(classes.icon, 'fab fa-linkedin')} color="primary" />
            <IconButton className={classNames(classes.icon, 'fab fa-github')} color="primary" />
          </div>
        </Drawer>
      </div>
    );
  }
}


MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isClosed: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MyDrawer);
