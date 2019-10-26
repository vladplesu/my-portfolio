import React from 'react';
import SectionWrapper from '../../components/SectionWrapper';
import SkillBar from '../../components/SkillBar';

export default function SkillsWrapper() {
  return (
    <SectionWrapper
      title='My Skils'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur dolores iste.'>
      <SkillBar title='JavaScript' progress='80%' />
      <SkillBar title='HTML5' progress='90%' />
      <SkillBar title='CSS3' progress='90%' />
      <SkillBar title='React' progress='35%' />
      <SkillBar title='jQuery' progress='60%' />
    </SectionWrapper>
  );
}
