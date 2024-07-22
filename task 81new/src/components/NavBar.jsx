// src/components/NavBar.jsx

import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#172029',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        <ListItem button component={Link} to="/events">
          <ListItemText primary="Events" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/contracts">
          <ListItemText primary="Contracts" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/add-lead">
          <ListItemText primary="Add Lead" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemText primary="Tasks" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemText primary="Products" sx={{ color: 'white' }} />
          </ListItem>
        <ListItem button component={Link} to="/add-event">
          <ListItemText primary="Add Evennt" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Box>
  );
};

export default NavBar;
