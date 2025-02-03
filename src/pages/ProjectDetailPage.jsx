// ProjectDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import './ProjectDetailPage.css'; // Import the CSS file

const DUMMY_PROJECTS = [
  {
    id: '1',
    title: 'MPMC CAT 1 Tutorial',
    description: 'Learn the CAT 1 syllabus of MPMC from a 9.9 pointer',
    extendedDescription: 'This tutorial covers all major topics in the MPMC CAT 1 syllabus...',
    cost: 200,
    deadline: new Date('2025-03-01'),
    name: 'Navya Kukreja',
    instructorCredentials: 'MSc in MPMC, 5 years of teaching experience',
    skills: ['EEE', 'Academics', 'Exams'],
    status: 'open',
    clientId: 'user1'
  },
  // Add more dummy data as needed
];

const ProjectDetailPage = () => {
  const { projectId } = useParams(); // Get the project ID from the URL
  const project = DUMMY_PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return <Typography variant="h6">Project not found</Typography>;
  }

  return (
    <Container maxWidth="md" className="container">
      <Typography variant="h4" className="project-title">
        {project.title}
      </Typography>
      <Typography variant="body1" paragraph className="project-description">
        {project.extendedDescription}
      </Typography>
      <Box className="project-info">
        <Typography variant="subtitle1" color="primary">
          Cost: ${project.cost}
        </Typography>
        <Typography variant="subtitle1">
          Deadline: {new Date(project.deadline).toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1">
          Name of Instructor: {project.name}
        </Typography>
        <Typography variant="subtitle2">
          Instructor Credentials: {project.instructorCredentials}
        </Typography>
      </Box>
      <Box className="project-skills">
        {project.skills.map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Box>
      <Button variant="contained" color="primary" className="book-now-btn">
        Book Now
      </Button>
    </Container>
  );
};

export default ProjectDetailPage;
