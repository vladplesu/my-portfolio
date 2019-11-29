import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Section from '../../components/Section';
import ProjectCard from '../../components/ProjectCard';

const itemNames = [
  'aleks-dorohovich-nJdwUHmaY8A-unsplash',
  'ben-kolde-bs2Ba7t69mM-unsplash',
  'georgie-cobbs-muOHbrFGEQY-unsplash',
  'hal-gatewood-tZc3vjPCk-Q-unsplash',
  'kevin-bhagat-zNRITe8NPqY-unsplash',
  'krisztian-tabori-IyaNci0CyRk-unsplash',
  'nordwood-themes-ubIWo074QlU-unsplash'
];

let index = 0;
const chunkSize = 2;
const chunkedItems = [];
while (index < itemNames.length) {
  chunkedItems.push(itemNames.slice(index, chunkSize + index));
  index += chunkSize;
}

export default function ProjectsWrapper() {
  return (
    <Section
      id='projects-section'
      title='My Projects'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero fuga commodi amet, deserunt voluptas.'
      alignText='center'>
      <Box px={2}>
        <Grid container spacing={2}>
          {chunkedItems.map((chunk, i) => {
            const leftColSize = i % 2 === 0 ? 4 : 8;
            const rightColSize = i % 2 === 0 ? 8 : 4;
            return chunk.map((imgName, index) => (
              <Grid
                item
                xs={12}
                sm={index % 2 === 0 ? leftColSize : rightColSize}
                key={index + i}>
                <ProjectCard key={`card-${index + i}`} imgName={imgName} />
              </Grid>
            ));
          })}
        </Grid>
      </Box>
    </Section>
  );
}
