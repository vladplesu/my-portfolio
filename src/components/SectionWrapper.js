import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Box from '@material-ui/core/Box';

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
  }
}));

export default function SectionWrapper({ title, description, children }) {
  const classes = useStyles();
  return (
    <Container component='section' id='about-section' className={classes.root}>
      <Box pb={4}>
        <Typography
          variant='h3'
          component='h2'
          gutterBottom
          classeName={classes.title}>
          {title}
        </Typography>
        <Typography variant='body1' className={classes.description}>
          {description}
        </Typography>
      </Box>
      {children}
      <Button variant='contained' color='secondary' className={classes.button}>
        <GetAppIcon />
        Download CV
      </Button>
    </Container>
  );
}
