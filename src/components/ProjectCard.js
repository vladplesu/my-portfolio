import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '285px',
    position: 'relative',
    zIndex: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    opacity: 0.2,
    backgroundColor: theme.palette.primary.light,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
  },
  content: {
    maxWidth: '80%',
    textAlign: 'center',
    padding: theme.spacing(2)
  },
  title: {
    fontSize: '20px',
    lineHeight: 1.5,
    fontWeight: 400
  }
}));

export default function ProjectCard({ url }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${url})` }}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h3 className={classes.title}>Web Development Project</h3>
      </div>
    </div>
  );
}
