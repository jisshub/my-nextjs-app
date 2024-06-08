"use client";

import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import Link from 'next/link';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: 250, bgcolor: 'background.paper', height: '100vh', borderRight: '1px solid #ddd' }}>
      <List component="nav">
        <Link href="/service/date-of-schedule" passHref>
          <ListItem
            button
            component="a"
            selected={selectedIndex === 0}
            onClick={() => handleListItemClick(0)}
            sx={{ backgroundColor: selectedIndex === 0 ? '#f0f0f0' : 'transparent' }}
          >
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Scheduled Date" />
          </ListItem>
        </Link>
        <Link href="/service/people" passHref>
          <ListItem
            button
            component="a"
            selected={selectedIndex === 1}
            onClick={() => handleListItemClick(1)}
            sx={{ backgroundColor: selectedIndex === 1 ? '#f0f0f0' : 'transparent' }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItem>
        </Link>
        <Link href="/service/products" passHref>
          <ListItem
            button
            component="a"
            selected={selectedIndex === 2}
            onClick={() => handleListItemClick(2)}
            sx={{ backgroundColor: selectedIndex === 2 ? '#f0f0f0' : 'transparent' }}
          >
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Services / Products" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
