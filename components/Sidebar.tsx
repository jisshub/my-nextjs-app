"use client";

import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, bgcolor: 'background.paper', height: '100vh', borderRight: '1px solid #ddd' }}>
      <List component="nav">
        <Link href="/service/date-of-schedule" passHref>
          <ListItem component="a">
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Scheduled Date" />
          </ListItem>
        </Link>
        <Link href="/service/people" passHref>
          <ListItem component="a">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItem>
        </Link>
        <Link href="/service/products" passHref>
          <ListItem component="a">
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
