import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import CardWrapper from '../../components/Card';
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
  },
  grid: {
    marginBottom: theme.spacing(3)
  }
}));

const courses = [
  {
    date: '2019-Present',
    title: 'Frontend Developer',
    institution: 'Digitan Nation',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eaque unde corrupti soluta a.'
  },
  {
    date: '2018-Present',
    title: 'Frontend Developer',
    institution: 'Free Code Camp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, pariatur. Quia, nulla excepturi facilis eius ex eligendi deserunt ullam!'
  },
  {
    date: '2018-2018',
    title: 'Computer Science',
    institution: 'CS50 Hardvard',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, saepe maxime!'
  }
];

const education = [
  {
    date: '2012-2016',
    title: 'Structural Engineer',
    institution: 'Faculty Of Civil Engineering',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, saepe maxime!'
  }
];

const work = [
  {
    date: '2019-Present',
    title: 'Desing Automation Engineer',
    institution: 'SDEV',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quos adipisci temporibus!'
  }
];

export default function ResumeWrapper() {
  const classes = useStyles();
  return (
    <Container component='section' id='resume-section' className={classes.root}>
      <Box pb={4}>
        <Typography
          variant='h3'
          component='h2'
          gutterBottom
          className={classes.title}>
          Resume
        </Typography>
        <Typography
          variant='body1'
          className={classes.description}
          gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quidem!
        </Typography>
      </Box>
      <Grid container spacing={3} className={classes.grid}>
        {courses.map((obj, index) => (
          <Grid key={index} item xs={12}>
            <CardWrapper
              date={obj.date}
              title={obj.title}
              institution={obj.institution}
              description={obj.description}
            />
          </Grid>
        ))}
        {work.map((obj, index) => (
          <Grid key={index} item xs={12}>
            <CardWrapper
              date={obj.date}
              title={obj.title}
              institution={obj.institution}
              description={obj.description}
            />
          </Grid>
        ))}
        {education.map((obj, index) => (
          <Grid key={index} item xs={12}>
            <CardWrapper
              date={obj.date}
              title={obj.title}
              institution={obj.institution}
              description={obj.description}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant='contained' color='secondary' className={classes.button}>
        <GetAppIcon />
        Download CV
      </Button>
    </Container>
  );
}
