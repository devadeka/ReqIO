import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TitleBar from './TitleBar'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    maxWidth: "345px",
    margin: "0 auto",
  },
  test: {
    backgroundColor : "blue"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "95%",
  },
  divContainer: {
    width:"100%"
  }
});


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username : null,
      password : null
    }
  }

  handleSignIn = (e) => {
    const { username, password } = this.state;
    console.log(username);
    console.log(password);
    this.props.signIn( username, password);
  }

  handleSignOut = (e) => {
    console.log('Signout')
    this.props.signOut();
  }

  handleUsernameChange = (e) => {
    this.setState({
      username : e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password : e.target.value
    })
  }

  render(){

      const { classes } = this.props;

      return (
        <div id="test" className={classes.divContainer}>
          <Card className={classes.card}>
            <CardContent>
              <TextField
                id="with-placeholder"
                label="Username"
                className={classes.textField}
                margin="normal"
                onChange = {this.handleUsernameChange}
              />
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                onChange = {this.handlePasswordChange}
              />
            </CardContent>
            <CardActions>
              <Button variant="raised" color="primary" onClick={this.handleSignIn}>
                Login
              </Button>
              <Button variant="raised" color="primary" onClick={this.handleSignOut}>
                Sign Up
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);