import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../../components/Section';
import ContactCard from '../../components/ContactCard';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 ${theme.spacing(2)}px`
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
    borderRadius: '4px',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  textField: {
    width: '100%'
  },
  button: {
    margin: '0 auto'
  }
}));

export default function ContactWrapper() {
  const classes = useStyles();
  return (
    <Section
      id='contact-section'
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
      <form noValidate autoComplete='off' className={classes.root}>
        <div className={classes.container}>
          <TextField
            className={classes.textField}
            required
            label='Your Name'
            margin='normal'
            variant='outlined'
          />
          <TextField
            className={classes.textField}
            required
            label='Your Email'
            margin='normal'
            variant='outlined'
          />
          <TextField
            className={classes.textField}
            required
            label='Your Subject'
            margin='normal'
            variant='outlined'
          />
          <TextField
            className={classes.textField}
            required
            label='Message'
            margin='normal'
            multiline
            variant='outlined'
            rows={5}
          />
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            fullWidth>
            Send Message
          </Button>
        </div>
      </form>
    </Section>
  );
}
