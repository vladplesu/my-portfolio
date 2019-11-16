import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Section from '../../components/Section';
import ContactCard from '../../components/ContactCard';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import maxImg from '../../images/max-duzij-qAjJk-un3BI-unsplash.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: `0 ${theme.spacing(2)}px`
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
  },
  img: {
    backgroundImage: `url(${maxImg})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}));

export default function ContactWrapper() {
  const classes = useStyles();
  return (
    <Section
      id='contact-section'
      title='Contact'
      description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, voluptate. Id ullam facere vel voluptate ab quam dolore est. Facere.'
      alignText='center'>
      <Grid container justify='center'>
        <Grid item xs={12} sm={6} md={3}>
          <ContactCard
            title='Adress'
            description='Iași, Romania'
            icon={<PlaceIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ContactCard
            title='Contact Number'
            description='+40 746 691 868'
            icon={<PhoneIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ContactCard
            title='Email Adress'
            description='vlad.plesu@yahoo.com'
            icon={<AlternateEmailIcon />}
          />
        </Grid>
      </Grid>
      <Box px={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <div className={classes.img}></div>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
}
