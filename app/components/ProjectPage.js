import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TreeGraph from './TreeGraph'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      treeData : [],
      displayNode : {},
      myTreeData : []
    }
    this.tree = [];
  }

  componentDidMount(){
    const { firebase,  match: { params } } = this.props;

    var ref = firebase.database().ref(`Project/${params.id}`);
    ref.once('value').then((dataSnapshot) => {
      this.tree = [dataSnapshot.val()];
      this.setState( () => {
        return {
          treeDataNode : dataSnapshot.val(),
          displayNode : dataSnapshot.val()
        }
      })
    });

  }

  updateDetails = (node) => {
    this.setState({
      displayNode : node
    });
  }

  render() {
    const { classes } = this.props;
    const { displayNode, treeDataNode } = this.state;

    

    return <div>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <TreeGraph data={[treeDataNode]} onClick={this.updateDetails}/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  {displayNode.name}
                </Typography>
                <Typography variant="subheading" color="inherit" className={classes.flex}>
                  {displayNode.desc}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
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
    height: "75vh",
  },
});


ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProjectPage);