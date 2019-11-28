import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 0, 0),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '720px'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1140px'
    }
  },
  title: {
    fontWeight: 700
  },
  description: {
    color: theme.palette.text.hint
  }
}));

export default function Section({
  id,
  title,
  description,
  alignText,
  children
}) {
  const classes = useStyles();
  return (
    <Container component='section' className={classes.root} id={id}>
      <Box mb={4} px={2} textAlign={alignText}>
        <Typography
          variant='h3'
          component='h2'
          gutterBottom
          className={classes.title}>
          {title}
        </Typography>
        <Typography variant='body1' className={classes.description}>
          {description}
        </Typography>
      </Box>
      {children}
      {/*<Hidden smDown>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}>
          <GetAppIcon />
          Download CV
        </Button>
      </Hidden>*/}
    </Container>
  );
}
