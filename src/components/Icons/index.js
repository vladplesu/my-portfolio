import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import iconList from './icon-list';

function Icons(props) {
  const { icon } = props;
  return (
    <SvgIcon {...props}>
      <path d={iconList[icon]} />
    </SvgIcon>
  );
}

Icons.defaultProps = {
  icon: '',
};

Icons.propTypes = {
  icon: PropTypes.string,
};

export default Icons;
