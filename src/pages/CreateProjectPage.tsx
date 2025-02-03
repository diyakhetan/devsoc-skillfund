import React from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box,
  Autocomplete,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AVAILABLE_SKILLS = [
  'React', 'TypeScript', 'UI/UX', 'Web Design', 'Node.js',
  'Python', 'Data Analysis', 'Content Writing', 'Graphic Design'
];

const CreateProjectPage = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add project creation logic here
    navigate('/projects');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Post a New Project
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              required
              label="Project Title"
              fullWidth
            />
            <TextField
              required
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              required
              label="Budget"
              type="number"
              InputProps={{
                startAdornment: '$',
              }}
            />
            <TextField
              required
              label="Deadline"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Autocomplete
              multiple
              options={AVAILABLE_SKILLS}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Required Skills"
                  placeholder="Select skills"
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Post Project
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateProjectPage;