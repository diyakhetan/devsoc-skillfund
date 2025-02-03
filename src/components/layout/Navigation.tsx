import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Add as AddIcon,
  Search as SearchIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { text: 'Browse Services', icon: <SearchIcon />, path: '/projects' },
    { text: 'Post Service', icon: <AddIcon />, path: '/projects/create' },
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <List>
      {navigationItems.map((item) => (
        <ListItem 
          button 
          key={item.text}
          onClick={() => handleNavigation(item.path)}
          selected={location.pathname === item.path}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              '& .MuiListItemIcon-root': {
                color: 'white',
              },
            },
          }}
        >
          <ListItemIcon sx={{ color: location.pathname === item.path ? 'white' : 'inherit' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            SkillFund
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    backgroundColor: location.pathname === item.path ? 'primary.dark' : 'transparent',
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed AppBar */}
      
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            '& .MuiDrawer-paper': { width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Navigation;