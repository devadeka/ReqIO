import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard';

class ProjectsDash extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projects : []
    }
  }

  componentDidMount(){
    const { projectRef, user } = this.props;
    var query = projectRef.orderByChild('uid').equalTo(user.uid)
    query.once('value')
      .then((data) => { 
        var projects = Object.keys(data.val()).map(
          (key,index) => {
            var proj = data.val()[key];
            proj['id'] = key;
            return proj;
            // <Grid item xs={4}> <ProjectCard key={key} project={data.val()[key]}/> </Grid>
          })
          this.setState({projects : projects}); 
      });
  }

  render() {
    const { classes, user } = this.props;
    const { projects } = this.state;
    
    return <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <ProfileCard user={user}/>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={24}>

                  {projects.map((project,index) => {return <Grid item xs={4}> 
                          <ProjectCard key={project.id} project={project}/> 
                        </Grid>})
                  }

                </Grid>
              </Grid>
            </Grid>
        </div>
  }

}



const styles = theme => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "75vh",
    // minHeight: 200,
  },
});


ProjectsDash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsDash);