import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import heroImg from '../images/hero_img.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '75vh',
    background: `url(${heroImg})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    marginRight: theme.spacing.unit * 2,
  },
  upper: {
    textTransform: 'uppercase',
  },
});

function Hero(props) {
  const { classes } = props;

  return (
    <div className={classes.root} color="primary">
      <Typography className={classes.title} variant="h3" color="primary">
        Vlad Plesu
      </Typography>
      <Typography
        className={classes.title}
        variant="h2"
        color="primary"
        gutterBottom
        classes={{ h2: classes.upper }}
      >
        Front-End Developer
      </Typography>
    </div>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
