import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StyledBGImage from './BackgroundImage';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    '&:hover div:first-of-type': {
      opacity: 0.8
    }
  },
  overlay: {
    opacity: 0.2,
    backgroundColor: theme.palette.primary.light,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    transition: 'all .3s ease'
  },
  content: {
    maxWidth: '80%',
    textAlign: 'center',
    padding: theme.spacing(10, 2)
  },
  title: {
    fontSize: '20px',
    lineHeight: 1.5,
    fontWeight: 400
  }
}));

export default function ProjectCard({ imgName }) {
  const classes = useStyles();

  return (
    <StyledBGImage imgName={`${imgName}.jpg`} className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h3 className={classes.title}>Web Development Project</h3>
      </div>
    </StyledBGImage>
  );
}
