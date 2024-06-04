import React from "react";
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const Lession = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <MainContent />
      </Box>
    </Box>
  );
};

export default Lession;
