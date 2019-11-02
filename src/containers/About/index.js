import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Section from '../../components/Section';

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
  );
}
