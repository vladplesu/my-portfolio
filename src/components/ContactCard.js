import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    textAlign: 'center'
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    marginTop: 0,
    marginBottom: theme.spacing(2),
    lineHeight: 1.5
  },
  description: {
    marginTop: 0,
    marginBottom: theme.spacing(1),
    color: theme.palette.text.hint
  },
  icon: {
    width: '100px',
    height: '100px',
    color: theme.palette.secondary.dark,
    margin: '0 auto 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%'
  }
}));

export default function ContactCard({ title, description, icon }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.icon}>{icon}</div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
