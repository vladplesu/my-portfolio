import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

// Add custom styles variable
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(7),
    color: theme.palette.text.primary
  },
  title: {
    fontWeight: 700
  },
  description: {
    color: theme.palette.text.hint
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column-reverse'
  }
}));

export default function AboutWrapper() {
  const classes = useStyles();
  return (
    <Container component='section' id='about-section' className={classes.root}>
      <Typography
        variant='h3'
        component='h2'
        gutterBottom
        classeName={classes.title}>
        About Me
      </Typography>
      <Typography variant='body1' className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure?
      </Typography>
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
      <Button variant='contained' color='secondary' className={classes.button}>
        <GetAppIcon />
        Download CV
      </Button>
    </Container>
  );
}
