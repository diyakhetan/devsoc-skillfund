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

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ mb: 2 }}>
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;