import React from 'react';
import DateOfSchedule from '../../../components/DateOfSchedule';
import Sidebar from '../../../components/Sidebar';
import { Box } from '@mui/material';

const DateOfSchedulePage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <DateOfSchedule />
    </Box>
  );
};

export default DateOfSchedulePage;
