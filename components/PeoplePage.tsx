"use client";

import React from 'react';
import { Box, TextField } from '@mui/material';
import { CiSearch } from "react-icons/ci";

const PeoplePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, width: '100%' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Payer or attendee name"
        InputProps={{
          startAdornment: (
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
              <CiSearch size={"30"} />
            </Box>
          ),
        }}
      />
    </Box>
  );
};

export default PeoplePage;
