import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Section from '../../components/Section';

import maxImg from '../../images/max-duzij-qAjJk-un3BI-unsplash.jpg';
import StyledBGImage from '../../components/BackgroundImage';

// Add custom styles variable
const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
      maxWidth: '720px'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1140px'
    },
    margin: '0 auto'
  },
  list: {
    padding: theme.spacing(0, 2)
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  description: {
    color: theme.palette.text.hint
  },
  about: {
    textAlign: 'left'
  },
  imgContainer: {
    padding: theme.spacing(12, 0, 0)
  },
  img: {
    backgroundImage: `url(${maxImg})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}));

export default function AboutWrapper() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  const aboutData = [
    {
      primary: 'Vlad Plesu',
      secondary: 'Name:'
    },
    {
      primary: 'Iasi, Romania',
      secondary: 'City:'
    },
    {
      primary: 'vlad.plesu@yahoo.com',
      secondary: 'Email:'
    }
  ];
  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} lg={5} className={classes.imgContainer}>
        {/**<div className={classes.img}></div>**/}
        <StyledBGImage imgName='max-duzij-qAjJk-un3BI-unsplash.jpg' />
      </Grid>
      <Grid item xs={12} sm={6} lg={7}>
        <Section
          id='about-section'
          title='About Me'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure?'
          alignText={matches ? 'center' : ''}>
          <List dense className={classes.list}>
            {aboutData.map((data, i) => (
              <ListItem disableGutters key={i}>
                <ListItemText
                  className={classes.listItemText}
                  primary={data.primary}
                  secondary={data.secondary}
                  primaryTypographyProps={{ variant: 'body1' }}
                  secondaryTypographyProps={{ className: classes.description }}
                />
              </ListItem>
            ))}
          </List>
        </Section>
      </Grid>
    </Grid>
  );
}
