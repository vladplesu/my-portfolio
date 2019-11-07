import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardWrapper from '../../components/CardWrapper';
import Section from '../../components/Section';

const useStyles = makeStyles(theme => ({}));

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
    <Section
      id='resume-section'
      title='Resume'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quidem!'>
      <Box px={2}>
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
      </Box>
    </Section>
  );
}
