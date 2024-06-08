// components/FilterDropdown.tsx
"use client";

import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import ServicesIcon from '@mui/icons-material/Build';
import ServiceTypeIcon from '@mui/icons-material/Category';
import ServiceNameIcon from '@mui/icons-material/Label';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DateIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import { useRouter } from 'next/navigation'; // Ensure the correct use of useRouter from next/navigation

export default function FilterDropdown() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FilterListIcon />
        </ListItemIcon>
        <ListItemText primary="Filter By" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
            <ListItemIcon>
              <ServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }} onClick={() => handleNavigation('/service/date-of-schedule')}>
                <ListItemIcon>
                  <DateIcon />
                </ListItemIcon>
                <ListItemText primary="Date of Schedule" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }} onClick={() => handleNavigation('/service/people')}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/service-type')}>
          <ListItemIcon>
            <ServiceTypeIcon />
          </ListItemIcon>
          <ListItemText primary="Service Type" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/service-name')}>
          <ListItemIcon>
            <ServiceNameIcon />
          </ListItemIcon>
          <ListItemText primary="Service Name" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/schedule')}>
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItemButton>
      </Collapse>
    </List>
  );
}
