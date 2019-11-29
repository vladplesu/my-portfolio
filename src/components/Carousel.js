import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className={classes.root} id='home-section'>
      {0 === currentIndex && (
        <CarouselItem
          title="I'm"
          subTitle='A Frontend Developer'
          message='Vlad Plesu'
          imgUrl='florian-olivo-4hbJ-eymZ1o-unsplash.jpg'
        />
      )}
      {1 === currentIndex && (
        <CarouselItem
          title="I'm a"
          secondTitle='located in Iasi'
          message='frontend developer'
          imgUrl='hero_img.png'
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
