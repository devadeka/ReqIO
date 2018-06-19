import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  avatar: {
      margin: 0,
    },
  avatarDiv: {
      margin: 10,
    },
  button: {
    color: "inherit", /* blue colors for links too */
    textDecoration: "inherit", /* no underline */
  },
  badgeMargin: {
    margin: theme.spacing.unit * -2,
    top: -2,
    right: 0,
  },
  badgePadding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});



function ButtonAppBar(props) {
  const { classes, title , user, signOut} = props;

  // getInitials = (email) => {
  //   email = email.toUpperCase()
  //   return `${email.split('@')[0][0]}${email.split('@')[1][0]}`;
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>  
            <DashboardIcon className={classes.icon} />
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Button color="inherit" component={Link} to="/">
                {title}
              </Button>
            </Typography>
            

            { user
                ? <div>
                    <Button color="inherit" component={Link} to="/dashboard">
                        New Project
                    </Button>
                  
                    <Button color="inherit" onClick={signOut}>
                        Logout
                    </Button>
                  
                    <Button color="inherit" component={Link} to="/dashboard">
                      <Avatar className={classes.avatar}>
                        {`${user.email.split('@')[0][0]}${user.email.split('@')[1][0]}`}
                      </Avatar> 
                    </Button>        
                  </div>
                : <div>
                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                  </div>
                
            }
            
        </Toolbar>
      </AppBar>
    </div>


    

  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);