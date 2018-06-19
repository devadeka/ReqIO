import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Login from './Login'
import TitleBar from './TitleBar'
import ProjectPage from './ProjectPage'
import ProjectCard from './ProjectCard'
import ProjectsDash from './ProjectsDash';
import firebase from 'firebase';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user : null
    }

    var config = {
      apiKey: "AIzaSyAb8LlYw2KADhSl-1z20MHih3tR4KJGo1Y",
      authDomain: "reqio-8b06c.firebaseapp.com",
      databaseURL: "https://reqio-8b06c.firebaseio.com",
      projectId: "reqio-8b06c",
      storageBucket: "reqio-8b06c.appspot.com",
      messagingSenderId: "93720369782"
    };
    
    this.app = firebase.initializeApp(config);
    this.project = this.app.database().ref('Project/');
  }


  componentDidMount() {
    // console.log(this.app);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState(()=>{
          return {user : user}
        })
        console.log(`onAuth:${user.uid}`);
      } else {
        // User is signed out.
        this.setState(()=>{
          return {user : null}
        })
        console.log("onAuth:Signout");
      }
    });
  }

  

  signIn = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  signOut = () => {
    firebase.auth().signOut();
  }
  

  render() {

    const { classes } = this.props;
    const { user } = this.state;
    return <div>
      <BrowserRouter>
        <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item sm={12}>
                <TitleBar title="Req-IO" user = {user} signOut={this.signOut}/>
              </Grid>
              <Grid item sm={12}>
                <Switch>
                  <Route path='/' render={() => (
                      user?
                      (<Redirect to="/dashboard"/>) : 
                      (<Redirect to="/login" />)
                  )} exact />

                  <Route path="/login" render={() => (
                      user? 
                      (<Redirect to="/dashboard"/>) :
                      (<Login signIn={this.signIn} />)
                  )} exact />

                  <Route path='/dashboard' render={() => (
                      user?
                      (<ProjectsDash user={user} projectRef={this.project} signOut={this.signOut}/>) : 
                      (<Redirect to="/login"/>)
                  )} exact />


                  <Route path='/project/new' render={() => (
                      user? 
                      (<ProjectPage user={user} firebase={this.app}/>) : 
                      (<Redirect to="/login" />)
                  )} exact />

                  <Route path='/project/:id' render={(props) => (
                      user? 
                      (<ProjectPage user={user} {...props} firebase={this.app}/>) : 
                      (<Redirect to="/login" />)
                  )} />
                  
                  <Route component={Error} />
                </Switch>
              </Grid>
          </Grid>
        </div>
      </BrowserRouter>

    </div>
  }
  }


  const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  
  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(App);