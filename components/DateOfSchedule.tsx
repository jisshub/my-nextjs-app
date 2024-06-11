"use client";

import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';

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
    <div className="flex flex-col p-4 space-y-4">
      <Typography variant="h6" gutterBottom>
        Show orders for
      </Typography>
      <div className="w-full mb-4">
        <label className="block text-gray-700">Show orders for</label>
        <Select
          value={orderTime}
          onChange={(e) => setOrderTime(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
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
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="flex space-x-4">
          <DatePicker
            label="From"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            slots={{
              textField: (props) => <TextField {...props} fullWidth className="mb-2" />,
            }}
          />
          <DatePicker
            label="To"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            slots={{
              textField: (props) => <TextField {...props} fullWidth className="mb-2" />,
            }}
          />
        </div>
      </LocalizationProvider>
      <div className="flex justify-between mt-4">
        <Button
          onClick={resetToDefault}
          className="bg-gray-300 text-black hover:bg-gray-300 px-4 py-2 rounded-md normal-case"
        >
          Reset to Default
        </Button>
        <Button
          className="bg-black text-white hover:bg-gray-800 px-4 py-2 
          rounded-md normal-case"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default DateOfSchedule;
