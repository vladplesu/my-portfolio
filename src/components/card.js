import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  card: {
    minWidth: 200,
    marginBottom: theme.spacing.unit * 3,
  },
});

function MyCard(props) {
  const { classes, cardTitle } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography component="p" color="textSecondary">
          Varius morbi enim nunc faucibus a. In metus vulputate eu scelerisque felis imperdiet. Vel
          elit scelerisque mauris pellentesque. A condimentum vitae sapien pellentesque habitant
          morbi tristique senectus et. Amet risus nullam eget felis eget nunc lobortis.
        </Typography>
      </CardContent>
    </Card>
  );
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
  cardTitle: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyCard);
