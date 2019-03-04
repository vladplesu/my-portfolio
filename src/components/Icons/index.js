import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import blueGrey from '@material-ui/core/colors/blueGrey';
import iconList from './icon-list';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    fontSize: 80,
  },
});

function Icons(props) {
  const {
    classes, icon, stopOffsetTop, stopOffsetBottom, colorFill,
  } = props;
  return (
    <SvgIcon
      className={classes.icon}
      component={svgProps => (
        <svg {...svgProps}>
          <defs>
            <linearGradient id={`gradient-${icon}`} gradientTransform="rotate(90)">
              <stop offset="1" stopColor={blueGrey[800]}>
                <animate
                  attributeName="offset"
                  from="1"
                  to={stopOffsetTop}
                  dur="2.5s"
                  fill="freeze"
                />
              </stop>
              <stop offset="1" stopColor={colorFill}>
                <animate
                  attributeName="offset"
                  from="1"
                  to={stopOffsetBottom}
                  dur="2.5s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
          </defs>
          {React.cloneElement(svgProps.children[0], {
            fill: `url(#gradient-${icon})`,
          })}
        </svg>
      )}
      {...props}
    >
      <path d={iconList[icon]} />
    </SvgIcon>
  );
}

Icons.defaultProps = {
  icon: '',
  stopOffsetTop: '0%',
  stopOffsetBottom: '0%',
  colorFill: '#fff',
};

Icons.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string,
  stopOffsetTop: PropTypes.string,
  stopOffsetBottom: PropTypes.string,
  colorFill: PropTypes.string,
};

export default withStyles(styles)(Icons);
