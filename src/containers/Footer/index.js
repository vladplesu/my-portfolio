import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Link from '@material-ui/core/Link';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 0, 14)
  },
  container: {
    margin: '0 auto',
    padding: theme.spacing(0, 2, 0),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '768px'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '992px'
    }
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  col: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: 0,
      flexGrow: 1
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
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
      color: theme.palette.secondary.main,
      '& li': {
        marginBottom: theme.spacing(1),
        display: 'flex'
      },
      '& li span': {
        marginLeft: theme.spacing(1),
        color: theme.palette.text.hint
      }
    }
  },
  socialList: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center !important'
    }
  },
  mediaIcon: {
    display: 'inline-flex !important',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(2)
  },
  link: {
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: theme.palette.text.hint,
    marginLeft: theme.spacing(1)
  },
  linkIcon: {
    height: '0.7em'
  },
  textCenter: {
    textAlign: 'center'
  }
}));

export default function FooterWrapper() {
  const classes = useStyles();
  const links = ['about', 'resume', 'skills', 'projects', 'contact'];
  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col}>
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
          <div className={classes.col}>
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
          <div className={classes.col}>
            <h2>Have a Question?</h2>
            <ul>
              <li>
                <PlaceIcon />
                <span>Iasi, Romania</span>
              </li>
              <li>
                <PhoneIcon />
                <span>+40 746 691 868</span>
              </li>
              <li>
                <AlternateEmailIcon />
                <span>vlad.plesu@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.row}>
          <div className={clsx(classes.col, classes.textCenter)}>
            <p>Copywright ©{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
