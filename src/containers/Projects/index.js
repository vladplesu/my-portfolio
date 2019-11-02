import React from 'react';
import Section from '../../components/Section';
import ProjectCard from '../../components/ProjectCard';
import url1 from '../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg';
import url2 from '../../images/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg';
import url3 from '../../images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg';

const urls = [url1, url2, url3];

export default function ProjectsWrapper() {
  return (
    <Section
      id='projects-section'
      title='My Projects'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero fuga commodi amet, deserunt voluptas.'>
      {urls.map((url, index) => (
        <ProjectCard key={index} url={url} />
      ))}
    </Section>
  );
}
