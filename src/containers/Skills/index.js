import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

import Section from '../../components/section';
import Icons from '../../components/Icons';

// TODO: Add custom styles variables
const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    fontSize: 80,
  },
});

// TODO: Add function Skills
function Skills(props) {
  const { classes } = props;

  return (
    <Section id="skills">
      <Typography variant="headline" color="secondary">
        My Skills
      </Typography>
      <Icons
        className={classes.icon}
        icon="html5"
        component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1" gradientTransform="rotate(90)">
                <stop offset="50%" stopColor={blueGrey[800]} />
                <stop offset="70%" stopColor="#e44d26" />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], {
              fill: 'url(#gradient1)',
            })}
          </svg>
        )}
      />
      <Icons
        className={classes.icon}
        icon="css3"
        component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient2" gradientTransform="rotate(90)">
                <stop offset="20%" stopColor={blueGrey[800]} />
                <stop offset="40%" stopColor="#264de4" />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], {
              fill: 'url(#gradient2)',
            })}
          </svg>
        )}
      />
      <Icons icon="js" />
    </Section>
  );
}

// TODO: Add propTypes
Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

// TODO: Export component
export default withStyles(styles)(Skills);
