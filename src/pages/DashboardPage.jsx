// DashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import './DashboardPage.css';  // Import the CSS file for styling

// Dummy data representing the sessions bought
const PURCHASED_SESSIONS = [
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
        Your Purchased Sessions
      </Typography>
      <Grid container spacing={3}>
        {PURCHASED_SESSIONS.map((session) => (
          <Grid item xs={12} sm={6} md={4} key={session.id}>
            <Card className="dashboard-card">
              <CardContent>
                <Typography variant="h6" component="h2">
                  {session.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="session-description">
                  {session.description}
                </Typography>
                <Box className="session-info">
                  <Typography variant="subtitle2" color="primary">
                    Cost: ${session.cost}
                  </Typography>
                  <Typography variant="subtitle2">
                    Status: {session.status}
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className="view-details-btn"
                  onClick={() => handleViewDetails(session.id)}
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
