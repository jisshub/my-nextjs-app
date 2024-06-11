"use client";

import React from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

const DateOfSchedule = () => {
  const [fromDate, setFromDate] = React.useState<Date | null>(null);
  const [toDate, setToDate] = React.useState<Date | null>(null);
  const [orderTime, setOrderTime] = React.useState('All time');

  const resetToDefault = () => {
    setFromDate(null);
    setToDate(null);
    setOrderTime('All time');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Show orders for
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
        <InputLabel>Show orders for</InputLabel>
        <Select
          value={orderTime}
          onChange={(e) => setOrderTime(e.target.value)}
          label="Show orders for"
        >
          <MenuItem value="All time">All time</MenuItem>
          <MenuItem value="Last 30 days">Last 30 days</MenuItem>
          <MenuItem value="Last 60 days">Last 60 days</MenuItem>
          <MenuItem value="This month">This month</MenuItem>
          <MenuItem value="Last month">Last month</MenuItem>
          <MenuItem value="This quarter">This quarter</MenuItem>
          <MenuItem value="2 quarters ago">2 quarters ago</MenuItem>
          <MenuItem value="This Year">This Year</MenuItem>
          <MenuItem value="Last Year">Last Year</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <DatePicker
            label="From"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            slots={{
              textField: (props) => <TextField {...props} fullWidth />,
            }}
          />
          <DatePicker
            label="To"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            slots={{
              textField: (props) => <TextField {...props} fullWidth />,
            }}
          />
        </Box>
      </LocalizationProvider>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" onClick={resetToDefault}>
          Reset to Default
        </Button>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default DateOfSchedule;
