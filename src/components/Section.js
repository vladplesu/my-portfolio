import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 0, 0)
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
    </Container>
  );
}
