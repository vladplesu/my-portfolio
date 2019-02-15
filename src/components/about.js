import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

// Add custom styles variable
const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
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
    flexBasis: '50%',
  },
});

// Add function AboutMe
function AboutMe(props) {
  const { classes } = props;
  // TODO: Add section with short description
  // TODO: Add section with contact information
  return (
    <section className={classes.root} color="primary">
      <Typography variant="headline">About me.</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error fugiat consequuntur
        voluptatem cumque, repellendus delectus corrupti voluptatum cupiditate tempore laudantium
        blanditiis similique quae aliquid, iusto rem nobis aut magni!
      </Typography>
      <Typography>
        <ul className={classes.list}>
          {[['Location', 'Iasi'], ['Email', 'vlad.plesu@yahoo.com'], ['GitHub', '@vladplesu']].map(
            text => (
              <li className={classes.listItem}>
                <span className={classes.spanTitle}>{text[0]}</span>
                <span>{text[1]}</span>
              </li>
            ),
          )}
        </ul>
      </Typography>
    </section>
  );
}

// TODO: Add propTypes
AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

// TODO: Export component
export default withStyles(styles)(AboutMe);
