import React from 'react';
import Box from '@material-ui/core/Box';
import Section from '../../components/Section';
import SkillBar from '../../components/SkillBar';
import Grid from '@material-ui/core/Grid';

export default function SkillsWrapper() {
  const skills = [
    { title: 'JavaScript', progress: '80%' },
    { title: 'HTML', progress: '90%' },
    { title: 'CSS', progress: '90%' },
    { title: 'React', progress: '35%' },
    { title: 'jQuery', progress: '60%' }
  ];
  return (
    <Section
      id='skills-section'
      title='My Skils'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur dolores iste.'
      alignText='center'>
      <Box px={2}>
        <Grid container spacing={3}>
          {skills.map((skill, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <SkillBar
                title={skill.title}
                progress={skill.progress}
                key={`${i}-skill`}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
