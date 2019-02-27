import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import heroImg from '../../images/hero_img.png';

const styles = theme => ({
  title: {
    color: 'white',
    marginRight: theme.spacing.unit * 2,
    textAlign: 'right',
  },
  upper: {
    textTransform: 'uppercase',
  },
});

const HeroSection = styled.section`
  align-items: flex-end;
  background: url(${heroImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 75vh;
`;

function Hero(props) {
  const { classes } = props;

  return (
    <HeroSection>
      <Typography className={classes.title} variant="h4" color="primary">
        Vlad Plesu
      </Typography>
      <Typography
        className={classes.title}
        variant="h3"
        color="primary"
        gutterBottom
        classes={{ h2: classes.upper }}
      >
        Front-End Developer
      </Typography>
    </HeroSection>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
