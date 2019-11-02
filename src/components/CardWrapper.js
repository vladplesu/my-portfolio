import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  description: {
    color: theme.palette.text.hint
  },
  card: {
    backgroundColor: theme.palette.primary.light
  },
  date: {
    fontWeight: 900
  }
}));

export default function CardWrapper({ date, title, institution, description }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.date}
            color='secondary'
            variant='h5'
            component='span'>
            {date}
          </Typography>
          <Typography variant='h5'>{title}</Typography>
          <Typography
            className={classes.description}
            variant='overline'
            gutterBottom>
            {institution}
          </Typography>
          <Typography
            variant='body1'
            component='p'
            className={classes.description}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
