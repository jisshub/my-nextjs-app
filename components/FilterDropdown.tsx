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
import Link from 'next/link';

export default function FilterDropdown() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
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
              <Link href="/service/date-of-schedule" passHref>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <DateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Date of Schedule" />
                </ListItemButton>
              </Link>
              <Link href="/service/people" passHref>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="People" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>

        <Link href="/service-type" passHref>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ServiceTypeIcon />
            </ListItemIcon>
            <ListItemText primary="Service Type" />
          </ListItemButton>
        </Link>
        <Link href="/service-name" passHref>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ServiceNameIcon />
            </ListItemIcon>
            <ListItemText primary="Service Name" />
          </ListItemButton>
        </Link>
        <Link href="/schedule" passHref>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItemButton>
        </Link>
      </Collapse>
    </List>
  );
}
