import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

// Add custom styles variable
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `0 ${theme.spacing.unit * 3.5}px`,
    marginTop: theme.spacing.unit * 3,
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    display: 'flex',
  },
  spanTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    flexBasis: '40%',
    flexShrink: '0',
  },
});

// Add function AboutMe
function AboutMe(props) {
  const { classes } = props;
  // Add section with short description
  // Add section with contact information
  return (
    <section className={classes.root} color="primary">
      <Typography variant="headline" color="secondary">
        About me.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error fugiat consequuntur
        voluptatem cumque, repellendus delectus corrupti voluptatum cupiditate tempore laudantium
        blanditiis similique quae aliquid, iusto rem nobis aut magni!
      </Typography>
      <Typography>
        <ul className={classes.list}>
          {[
            ['Location', 'Iasi'],
            ['Email', 'myemail@ysomethingcool.com'],
            ['GitHub', '@vladplesu'],
          ].map(text => (
            <li className={classes.listItem}>
              <span className={classes.spanTitle}>{text[0]}</span>
              <span>{text[1]}</span>
            </li>
          ))}
        </ul>
      </Typography>
    </section>
  );
}

// Add propTypes
AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(AboutMe);
