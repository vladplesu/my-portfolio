import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Section from '../../components/Section';
import ProjectCard from '../../components/ProjectCard';
import url1 from '../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg';
import url2 from '../../images/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg';
import url3 from '../../images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg';
import url4 from '../../images/nordwood-themes-ubIWo074QlU-unsplash.jpg';
import url5 from '../../images/aleks-dorohovich-nJdwUHmaY8A-unsplash.jpg';
import url6 from '../../images/georgie-cobbs-muOHbrFGEQY-unsplash.jpg';
import url7 from '../../images/krisztian-tabori-IyaNci0CyRk-unsplash.jpg';

const urls = [url1, url2, url3, url4, url5, url6, url7];

let index = 0;
const chunkSize = 2;
const chunkedUrls = [];
while (index < urls.length) {
  chunkedUrls.push(urls.slice(index, chunkSize + index));
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
          {chunkedUrls.map((chunk, i) => {
            const leftColSize = i % 2 === 0 ? 4 : 8;
            const rightColSize = i % 2 === 0 ? 8 : 4;
            return chunk.map((url, index) => (
              <Grid
                item
                xs={12}
                sm={index % 2 === 0 ? leftColSize : rightColSize}
                key={index + i}>
                <ProjectCard key={`card-${index + i}`} url={url} />
              </Grid>
            ));
          })}
        </Grid>
      </Box>
    </Section>
  );
}
