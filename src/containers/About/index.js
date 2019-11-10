import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Section from '../../components/Section';

import maxImg from '../../images/max-duzij-qAjJk-un3BI-unsplash.jpg';

// Add custom styles variable
const useStyles = makeStyles(theme => ({
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
    <Grid container>
      <Grid item sm={6} className={classes.imgContainer}>
        <div className={classes.img}></div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Section
          id='about-section'
          title='About Me'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure?'>
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
