import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useScrollPosition from '../hooks/useScrollPositon';

const useStyles = makeStyles(theme => ({
  navLink: {
    textDecoration: 'none',
    display: 'block',
    fontSize: '1rem',
    padding: theme.spacing(1.4, 2.5, 1.4, 2.5),
    color: theme.palette.text.primary,
    fontWeight: 400,
    opacity: 1,
    '&:hover, &:focus': {
      outline: 'none'
    },
    '& span': {
      textTransform: 'capitalize',
      position: 'relative',
      display: 'block',
      paddingBottom: '2px',
      lineHeight: 1.8,
      [theme.breakpoints.up('md')]: {
        display: 'inline-block'
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        background: theme.palette.secondary.light,
        visibility: 'visible',
        transform: 'scaleX(0)',
        transition: 'all 0.3s ease-in-out 0s'
      }
    },
    '&:hover span:before': {
      transform: 'scaleX(1)'
    }
  },
  active: {
    background: 'none',
    color: theme.palette.secondary.main,
    '& span:before': {
      transform: 'scaleX(1)'
    }
  }
}));

export default function MenuItem({ to, isActive }) {
  const classes = useStyles();
  const anchorTarget = document.getElementById(`${to}-section`);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <li>
      <a
        href={`#${to}-section`}
        className={clsx(classes.navLink, isActive && classes.active)}
        onClick={handleClick}>
        <span>{to}</span>
      </a>
    </li>
  );
}
