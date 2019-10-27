import React from 'react';
import Section from '../../components/Section';
import ContactCard from '../../components/ContactCard';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export default function ContactWrapper() {
  return (
    <Section
      title='Contact'
      description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptate. Id ullam facere vel voluptate ab quam dolore est. Facere.'>
      <ContactCard
        title='Adress'
        description='Iași, Romania'
        icon={<PlaceIcon />}
      />
      <ContactCard
        title='Contact Number'
        description='+40 746 691 868'
        icon={<PhoneIcon />}
      />
      <ContactCard
        title='Email Adress'
        description='vlad.plesu@yahoo.com'
        icon={<AlternateEmailIcon />}
      />
    </Section>
  );
}
