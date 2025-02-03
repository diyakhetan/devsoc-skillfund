// ProfilePage.jsx
import React from 'react';
import { Container, Typography, Card, CardContent, Box, Button, Grid } from '@mui/material';
import './ProfilePage.css';  // Import the CSS file for styling

const USER_PROFILE = {
  name: 'Diya Khetan',
  phone: '+91 9876543210',
  email: 'diya@example.com',
  hostelRoom: 'A-105',
  cgpa: '9.2',
};

const ProfilePage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className="profile-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Box className="profile-info">
                <Typography variant="subtitle1"><strong>Name:</strong> {USER_PROFILE.name}</Typography>
                <Typography variant="subtitle1"><strong>Phone:</strong> {USER_PROFILE.phone}</Typography>
                <Typography variant="subtitle1"><strong>Email:</strong> {USER_PROFILE.email}</Typography>
                <Typography variant="subtitle1"><strong>Hostel Room:</strong> {USER_PROFILE.hostelRoom}</Typography>
                <Typography variant="subtitle1"><strong>CGPA:</strong> {USER_PROFILE.cgpa}</Typography>
              </Box>
              <Button variant="contained" color="primary" className="edit-btn">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
