import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
  return (
    <Box sx={{ width: 240, bgcolor: '#f4f4f4', height: '100vh', padding: 2 }}>
      <Typography variant="h6" gutterBottom>Bài giảng</Typography>
      <Button startIcon={<AddIcon />} variant="contained" fullWidth>Tạo bài giảng</Button>
      <List component="nav" sx={{ marginTop: 2 }}>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Tất cả bài giảng" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
