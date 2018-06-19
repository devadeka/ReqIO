import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'row',
  }),
  avatar:{
    padding: 30,
  },
  textDiv:{
    paddingLeft: 24,
  },
});

// getInitials = (email) => {
//   email = email.toUpperCase()
//   return `${email.split('@')[0][0]}${email.split('@')[1][0]}`;
// }

function PaperSheet(props) {
  const { classes, user } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <div>
          <Avatar className={classes.avatar}>
            <h1>{`${user.email.split('@')[0][0]}${user.email.split('@')[1][0]}`}</h1>
          </Avatar>
        </div>
        <div className={classes.textDiv}>
          <Typography variant="headline" component="h3">
            {user.email.toUpperCase()}
          </Typography>
          <Typography component="p">
            {user.uid}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);