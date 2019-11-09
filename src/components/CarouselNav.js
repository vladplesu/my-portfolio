import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CarouselButton from './CarouselButton';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '5px',
    textAlign: 'center'
  }
}));

export default function CarouselNav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CarouselButton />
      <CarouselButton />
    </div>
  );
}
