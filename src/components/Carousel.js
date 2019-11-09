import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import codeLines from '../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg';
import heroimg from '../images/hero_img.png';
import CarouselNav from '../components/CarouselNav';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  container: {
    textAlign: 'center',
    height: '750px',
    display: 'flex',
    alignItems: 'flex-end',
    animation: '1s both $fadeIn'
    // opacity: 1,
    // transform: 'scale(1.0)',
    // transition: 'all 1s ease-out',
    // '&.active': {
    //   opacity: 0,
    //   transform: 'scale(0.95)'
    //   // transition: 'all 1s ease-out 2s'
    //   // transition: 'all 3s linear'
    // }
  },
  background: {
    // backgroundImage: `url(${codeLines})`,
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    position: 'relative',
    '& div': {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.primary.dark,
      opacity: 0.05
    }
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: theme.spacing(1),
    '& h1': {
      fontSize: '2.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      margin: '1rem 0 1.5rem',
      '&  span': {
        color: theme.palette.secondary.main
      }
    },
    '& h2': {
      margin: '0 0 1.5rem',
      lineHeight: 1.5,
      fontWeight: 400,
      fontSize: '1.9rem'
    },
    '& div ': {
      width: '100%'
    },
    '& div > span': {
      fontWeight: 600,
      fontSize: '0.8rem',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: theme.palette.secondary.main
    }
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.95)'
    },
    to: {
      opacity: 1,
      transform: 'scale(1.0)'
    }
  }
}));

export default function Carousel() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % 2);
    }, 3000);
    return () => clearInterval(timeout);
  }, [currentIndex]);
  return (
    <div className={classes.root}>
      {0 === currentIndex && (
        <div className={classes.container}>
          <div
            className={classes.background}
            style={{ backgroundImage: `url(${codeLines})` }}>
            <div></div>
          </div>
          <div className={classes.content}>
            <div>
              <span>Hello!</span>
              <h1>
                I'm a <span>Frontend Developer</span>
              </h1>
            </div>
          </div>
        </div>
      )}
      {1 === currentIndex && (
        <div className={classes.container}>
          <div
            className={classes.background}
            style={{ backgroundImage: `url(${heroimg})` }}>
            <div></div>
          </div>
          <div className={classes.content}>
            <div>
              <span>Hello!</span>
              <h1>
                I'm <span>Vlad Plesu</span>
              </h1>
              <h2>A Freelance Frontend Developer</h2>
            </div>
          </div>
        </div>
      )}
      <CarouselNav />
    </div>
  );
}
