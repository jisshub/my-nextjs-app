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
import { useRouter } from 'next/navigation';

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
    <List className="w-full max-w-xs bg-white shadow-md rounded-md" component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick} className="hover:bg-gray-100">
        <ListItemIcon>
          <FilterListIcon />
        </ListItemIcon>
        <ListItemText primary="Filter By" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className="pl-8 hover:bg-gray-100" onClick={handleClick}>
            <ListItemIcon>
              <ServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton className="pl-12 hover:bg-gray-100" onClick={() => handleNavigation('/service/date-of-schedule')}>
                <ListItemIcon>
                  <DateIcon />
                </ListItemIcon>
                <ListItemText primary="Date of Schedule" />
              </ListItemButton>
              <ListItemButton className="pl-12 hover:bg-gray-100" onClick={() => handleNavigation('/service/people')}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
}