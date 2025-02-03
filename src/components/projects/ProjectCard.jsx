import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Box,
  Button,
  CardActions
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card className="project-card">
      <CardContent className="project-card-content">
        <Typography gutterBottom variant="h6" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-description">
          {project.description}
        </Typography>
        <Box className="project-info">
          <Typography variant="subtitle2" color="primary">
            Cost: ${project.cost}
          </Typography>
          <Typography variant="subtitle2">
            Deadline: {new Date(project.deadline).toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle2">
            Name of Instructor: {project.name}
          </Typography>
        </Box>
        <Box className="project-skills">
          {project.skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
          onClick={() => navigate(`/projects/${project.id}`)} // Navigate to detail page
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
