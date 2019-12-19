import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavLink from './NavLink';
import useScrollPosition from '../hooks/useScrollPositon';

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
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('xs')]: {
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
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(-1),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(-2)
    }
  },
  navbarCollapse: {
    flexBasis: '100%',
    flexGrow: 1,
    alignItems: 'center',
    marginRight: theme.spacing(-1),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexBasis: 'auto',
      marginRight: theme.spacing(-2)
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
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
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
    padding: 0
  },
  awake: {
    marginTop: 0,
    transition: '.35s all ease-out'
  },
  sleep: {
    transition: '.35s all ease-out'
  }
}));

const StyledContainer = withStyles({
  root: {
    display: 'flex'
  }
})(Container);

const menuItemNames = [
  'home',
  'about',
  'resume',
  'skills',
  'projects',
  'contact'
];

export default function Navbar() {
  const classes = useStyles();
  const [hideOnScroll, setHideOnScroll] = React.useState(false);
  const [showOnScroll, setShowOnScroll] = React.useState(false);
  const [sleepOnScroll, setSleepOnScroll] = React.useState(false);
  const curPos = useScrollPosition();

  if (curPos.y > 100 && !hideOnScroll) {
    setHideOnScroll(true);
  }
  if (curPos.y < 100 && hideOnScroll) {
    setHideOnScroll(false);
    setSleepOnScroll(false);
  }
  if (curPos.y > 350 && !showOnScroll) {
    setShowOnScroll(true);
    setSleepOnScroll(true);
  }
  if (curPos.y < 350 && showOnScroll) {
    setShowOnScroll(false);
  }

  return (
    <nav
      className={clsx(
        classes.root,
        hideOnScroll && classes.scrolled,
        showOnScroll && classes.awake,
        sleepOnScroll && classes.sleep
      )}>
      <StyledContainer>
        <a href='/' className={classes.brand}>
          Vlad
        </a>
        <div className={classes.navbarCollapse}>
          <ul className={classes.navbarNav}>
            {menuItemNames.map(itemName => {
              const anchorTarget = document.getElementById(
                `${itemName}-section`
              );
              const anchorTargetTop =
                anchorTarget.getBoundingClientRect().top + curPos.y - 250;
              const anchorTargetBottom =
                anchorTarget.getBoundingClientRect().bottom + curPos.y - 250;
              const isActive =
                curPos.y < anchorTargetBottom && curPos.y >= anchorTargetTop;
              return (
                <NavLink key={itemName} to={itemName} isActive={isActive} />
              );
            })}
          </ul>
        </div>
      </StyledContainer>
    </nav>
  );
}
