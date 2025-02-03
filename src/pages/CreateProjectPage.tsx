import React, { useState } from 'react';
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

const AVAILABLE_TYPES = [
  'Academic', 'Sports', 'Technical Skills', 'Creative Skills', 'Public Speaking',
  'Other'
];

const CreateProjectPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add project creation logic here
    navigate('/projects');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Post a New Service
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField required label="Service Title" fullWidth />
            <TextField required label="Description" multiline rows={4} fullWidth />
            <TextField required label="Cost" type="number" InputProps={{ startAdornment: '$' }} />
            <TextField required label="Deadline" type="date" InputLabelProps={{ shrink: true }} />

            {/* Skills Selection */}
            <Autocomplete
              multiple
              options={AVAILABLE_SKILLS}
              renderInput={(params) => (
                <TextField {...params} label="Applied Skills" placeholder="Select skills" />
              )}
            />

            {/* Type of Service Selection */}
            <Autocomplete
              options={AVAILABLE_TYPES}
              value={selectedType}
              onChange={(event, newValue) => setSelectedType(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Type of Service" placeholder="Select type" />
              )}
            />

            {/* Conditionally Render Input Field When "Academic" is Selected */}
            {selectedType === "Academic" && (
              <TextField label="Enter Academic Details" fullWidth required />
            )}

            {/* File Upload Input */}
            <Button variant="contained" component="label">
              Upload Photo
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            </Button>

            {/* Show Uploaded File Name */}
            {selectedFile && (
              <Typography variant="body2">
                Selected File: {selectedFile.name}
              </Typography>
            )}

            <Button type="submit" variant="contained" color="primary" size="large">
              Post Service
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateProjectPage;
