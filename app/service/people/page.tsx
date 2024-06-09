import React from 'react';
import PeoplePage from '../../../components/PeoplePage';
import Sidebar from '../../../components/Sidebar';
import { Box } from '@mui/material';

const PeoplePageComponent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <PeoplePage />
    </Box>
  );
};

export default PeoplePageComponent;
