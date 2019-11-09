import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3)
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  skillName: {
    marginBottom: theme.spacing(1),
    marginTop: 0,
    color: 'white'
  },
  progress: {
    height: '10px',
    display: 'flex',
    borderRadius: '0.25rem',
    backgroundColor: theme.palette.secondary.dark
  },
  progressBar: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '0.25rem'
  }
}));

export default function SkillBar({ title, progress }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h3 className={classes.skillName}>{title}</h3>
        <span>{progress}</span>
      </div>
      <div className={classes.progress}>
        <div className={classes.progressBar} style={{ width: progress }}></div>
      </div>
    </div>
  );
}
