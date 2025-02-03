import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  TextField, 
  MenuItem, 
  Box,
  Typography,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from '../components/projects/ProjectCard';
import './ProjectsPage.css';  // Import the CSS file for styling

const DUMMY_PROJECTS = [
  {
    id: '1',
    title: 'MPMC CAT 1 Tutorial',
    description: 'Learn the CAT 1 syllabus of MPMC from a 9.9 pointer',
    cost: 200,
    deadline: new Date('2025-03-01'),
    name: 'Navya Kukreja',
    skills: ['EEE', 'Academics', 'Exams'],
    status: 'open',
    clientId: 'user1'
  },
  // Add more dummy data as needed
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProjects = DUMMY_PROJECTS.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'all' || project.skills.includes(category))
  );

  return (
    <Container maxWidth="lg" className="projects-page">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="React">React</MenuItem>
              <MenuItem value="UI/UX">UI/UX</MenuItem>
              <MenuItem value="Web Design">Web Design</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>
      
      <Grid container spacing={3}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
