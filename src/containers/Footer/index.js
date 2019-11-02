import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5, 0, 14)
  },
  container: {
    textAlign: 'center',
    padding: theme.spacing(3, 2, 0),
    '& h2': {
      fontSize: '1.8rem',
      marginTop: 0
    },
    '& p': {
      color: theme.palette.text.hint
    },
    '& ul': {
      paddingLeft: 0,
      listStyle: 'none',
      margin: theme.spacing(3, 0, 2),
      textAlign: 'left',
      color: theme.palette.text.hint,
      '& li': {
        marginBottom: theme.spacing(1),
        display: 'flex'
      }
    }
  },
  socialList: {
    textAlign: 'center !important'
  },
  mediaIcon: {
    display: 'inline-flex !important',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.secondary.dark,
    margin: theme.spacing(0, 2)
  },
  link: {
    textTransform: 'capitalize',
    textDecoration: 'none'
  },
  linkIcon: {
    height: '0.7em'
  }
}));

export default function FooterWrapper() {
  const classes = useStyles();
  const links = ['about', 'resume', 'skills', 'projects', 'contact'];
  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
          veritatis?
        </p>
        <ul className={classes.socialList}>
          <li className={classes.mediaIcon}>
            <LinkedInIcon />
          </li>
          <li className={classes.mediaIcon}>
            <GitHubIcon />
          </li>
        </ul>
      </div>
      <div className={classes.container}>
        <h2>Link</h2>
        <ul>
          {links.map(link => (
            <li key={link}>
              <ArrowRightAltIcon className={classes.linkIcon} />
              <Link
                href={`#${link}-section`}
                color='textPrimary'
                className={classes.link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.container}>
        <h2>Have a Question?</h2>
        <ul>
          <li>
            <PlaceIcon />
            Iasi, Romania
          </li>
          <li>
            <PhoneIcon />
            +40 746 691 868
          </li>
          <li>
            <AlternateEmailIcon />
            vlad.plesu@yahoo.com
          </li>
        </ul>
      </div>
      <div className={classes.container}>
        <p>Copywright ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
