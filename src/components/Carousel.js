import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import codeLines from '../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg';
import heroimg from '../images/hero_img.png';
import CarouselNav from '../components/CarouselNav';
import CarouselItem from '../components/Carouseltem';

const SLIDE_DURATION = 5000;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  }
}));

export default function Carousel() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % 2);
    }, SLIDE_DURATION);
    return () => clearInterval(timeout);
  }, [currentIndex]);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % 2);
  };

  return (
    <div className={classes.root}>
      {0 === currentIndex && (
        <CarouselItem
          title="I'm"
          subTitle='A Frontend Developer'
          message='Vlad Plesu'
          imgUrl={codeLines}
        />
      )}
      {1 === currentIndex && (
        <CarouselItem
          title="I'm a"
          secondTitle='located in Iasi'
          message='frontend developer'
          imgUrl={heroimg}
        />
      )}
      <CarouselNav
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        handleClick={handleClick}
      />
    </div>
  );
}
