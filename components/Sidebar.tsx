"use client";

import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (pathname === '/service/date-of-schedule') return 0;
    if (pathname === '/service/people') return 1;
    if (pathname === '/service/products') return 2;
    return 0;
  });

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: 250, bgcolor: 'background.paper', height: '100vh', borderRight: '1px solid #ddd' }}>
      <List component="nav">
        <Link href="/service/date-of-schedule" passHref>
          <ListItem
            component="a"
            onClick={() => handleListItemClick(0)}
            sx={{ backgroundColor: selectedIndex === 0 ? '#f0f0f0' : 'transparent', '&:hover': { backgroundColor: '#f0f0f0' } }}
          >
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Scheduled Date" />
          </ListItem>
        </Link>
        <Link href="/service/people" passHref>
          <ListItem
            component="a"
            onClick={() => handleListItemClick(1)}
            sx={{ backgroundColor: selectedIndex === 1 ? '#f0f0f0' : 'transparent', '&:hover': { backgroundColor: '#f0f0f0' } }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItem>
        </Link>
        <Link href="/service/products" passHref>
          <ListItem
            component="a"
            onClick={() => handleListItemClick(2)}
            sx={{ backgroundColor: selectedIndex === 2 ? '#f0f0f0' : 'transparent', '&:hover': { backgroundColor: '#f0f0f0' } }}
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
