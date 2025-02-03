// DashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import './DashboardPage.css';  // Import the CSS file for styling

// Dummy data representing the services bought
const PURCHASED_SERVICES = [
  {
    id: '1',
    title: 'MPMC CAT 1 Tutorial',
    description: 'Learn the CAT 1 syllabus of MPMC from a 9.9 pointer',
    cost: 200,
    status: 'Completed',
  },
  {
    id: '2',
    title: 'React Development Bootcamp',
    description: 'A comprehensive React.js course for beginners',
    cost: 150,
    status: 'Ongoing',
  },
  // Add more dummy data as needed
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Purchased Services
      </Typography>
      <Grid container spacing={3}>
        {PURCHASED_SERVICES.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card className="dashboard-card">
              <CardContent>
                <Typography variant="h6" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="service-description">
                  {service.description}
                </Typography>
                <Box className="service-info">
                  <Typography variant="subtitle2" color="primary">
                    Cost: ${service.cost}
                  </Typography>
                  <Typography variant="subtitle2">
                    Status: {service.status}
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className="view-details-btn"
                  onClick={() => handleViewDetails(service.id)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
