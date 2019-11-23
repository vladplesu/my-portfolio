import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    padding: theme.spacing(1, 1.5),
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      padding: theme.spacing(2)
    }
  },
  brand: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1.5, 0),
    fontWeight: 900,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
    marginRight: theme.spacing(2)
  },
  navbarCollapse: {
    flexBasis: '100%',
    flexGrow: 1,
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexBasis: 'auto'
    }
  },
  navbarNav: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 0,
    listStyle: 'none',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
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
  },
  scrolled: {
    position: 'fixed',
    right: 0,
    left: 0,
    top: 0,
    marginTop: '-130px',
    background: '#000',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    padding: '0 15px'
  },
  awake: {
    marginTop: 0,
    transition: '.3s all ease-out'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <nav className={clsx(classes.root, classes.scrolled, classes.awake)}>
      <Container style={{ display: 'flex' }}>
        <a href='/' className={classes.brand}>
          Vlad
        </a>
        <div className={classes.navbarCollapse}>
          <ul className={classes.navbarNav}>
            <li>
              <a
                href='#home-section'
                className={clsx(classes.navLink, true && classes.active)}>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href='#about-section' className={classes.navLink}>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href='#resume-section' className={classes.navLink}>
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href='#skills-section' className={classes.navLink}>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href='#projects-section' className={classes.navLink}>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href='#contact-section' className={classes.navLink}>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
