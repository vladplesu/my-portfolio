import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '5px',
    border: 'none',
    padding: 0,
    position: 'relative',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: 0,
      bottom: 0,
      width: '14px',
      height: '14px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%'
    }
  },
  active: {
    backgroundColor: '#fff'
  }
}));

export default function CarouselButton({ isActive, handleClick }) {
  const classes = useStyles();
  return (
    <button
      className={`${classes.dot} ${isActive && classes.active}`}
      onClick={handleClick}></button>
  );
}
