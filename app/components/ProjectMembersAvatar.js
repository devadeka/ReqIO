import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = {
  avatar: [
    {
      margin: 10,
      padding: 5,
    },
    {
      margin: 10,
      color: '#fff',
      backgroundColor: deepOrange[500],
    },
    {  
      margin: 10,
      color: '#fff',
      backgroundColor: deepPurple[500],
    }
  ],
  
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

let getInitials = (member) => {
  // debugger
    return member.split(" ")
                 .map((name) => {
                   return name[0].toUpperCase()
                  })
                  .join("").substring(0,2)
};

function ProjectAvatars(props) {
  const { classes } = props;
  const memberNames = ["Devatanu Deka", "Mike", "Ka-Sun"]
  return (
    <div className={classes.row}>
      {memberNames.map( (name,key) => {
          return <Tooltip key = {key} title={name}  placement="top">
                    <Avatar key={key} className={_.sample(classes.avatar)}>{getInitials(name)}</Avatar>
                    </Tooltip>
        })}
    </div>
  );
}

ProjectAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectAvatars);