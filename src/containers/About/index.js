import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SectionWrapper from '../../components/SectionWrapper';

// Add custom styles variable
const useStyles = makeStyles(theme => ({
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
  return (
    <SectionWrapper
      title='About Me'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure?'>
      <List dense>
        <ListItem disableGutters>
          <ListItemText
            className={classes.listItemText}
            primary='Vlad Plesu'
            secondary='Name:'
            primaryTypographyProps={{ variant: 'body1' }}
            secondaryTypographyProps={{ className: classes.description }}
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            className={classes.listItemText}
            primary='Iasi, Romania'
            secondary='City:'
            primaryTypographyProps={{ variant: 'body1' }}
            secondaryTypographyProps={{
              variant: 'body1',
              className: classes.description
            }}
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            className={classes.listItemText}
            primary='vlad.plesu@yahoo.com'
            secondary='Mail:'
            primaryTypographyProps={{ variant: 'body1' }}
            secondaryTypographyProps={{
              variant: 'body1',
              className: classes.description
            }}
          />
        </ListItem>
      </List>
    </SectionWrapper>
  );
}
