import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StyledBGImage from './BackgroundImage';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    height: '750px',
    display: 'flex',
    alignItems: 'flex-end',
    animation: '1s both $fadeIn'
  },
  background: {
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

export default function CarouselItem({
  title,
  secondTitle,
  subTitle,
  message,
  imgUrl: imgName
}) {
  const classes = useStyles();

  const handleClick = event => {
    console.log(event.currentTarget.hash);
    event.preventDefault();
    const anchorTarget = document.querySelector(event.currentTarget.hash);
    console.log(anchorTarget);
    anchorTarget.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.container}>
      <StyledBGImage imgName={imgName}>
        <div></div>
      </StyledBGImage>
      <div className={classes.content}>
        <div>
          <span>Hello!</span>
          <h1>
            {title} <span>{message}</span> {secondTitle}
          </h1>
          {subTitle && <h2>{subTitle}</h2>}
          <ButtonGroup component='p'>
            <Button
              variant='contained'
              color='secondary'
              href='#contact-section'
              onClick={handleClick}>
              Contact Me
            </Button>
            <Button
              variant='outlined'
              href='#projects-section'
              onClick={handleClick}>
              My Work
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
