import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TitleBar from './TitleBar'
import ProjectMembersAvatar from './ProjectMembersAvatar'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    
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
  button: {
    color: "inherit", /* blue colors for links too */
    textDecoration: "inherit", /* no underline */
  }
});

function ProjectCard(props) {
  const { classes, project } = props;

  return (
    <div>
      <Card className={classes.card}>
      <Link to={`/project/${project.id}`} className={classes.button}>
      <CardHeader
            title={project.name}
          />
        <CardContent>
          <Typography component="p">
            {project.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <ProjectMembersAvatar/>
        </CardActions>
        </Link>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);