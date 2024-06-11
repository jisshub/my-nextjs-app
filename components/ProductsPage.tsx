"use client";

import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  Checkbox,
  Typography,
} from "@mui/material";
import { users } from "../data/user";

const ProductsPage = () => {
  const [serviceType, setServiceType] = useState("");
  const [status, setStatus] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const serviceTypes = Array.from(new Set(users.map(user => user.type)));
  const statuses = Array.from(new Set(users.map(user => user.status)));

  const resetToDefault = () => {
    setServiceType("");
    setStatus("");
    setFilteredUsers(users);
  };

  const handleApply = () => {
    const filtered = users.filter(user => 
      (serviceType ? user.type === serviceType : true) &&
      (status ? user.status === status : true)
    );
    setFilteredUsers(filtered);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select service type</InputLabel>
        <Select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          label="Select service type"
        >
          {serviceTypes.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Select status</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Select status"
        >
          {statuses.map(status => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={resetToDefault}>
          Reset to Default
        </Button>
        <Button variant="contained" color="primary" onClick={handleApply}>
          Apply
        </Button>
      </Box>
      
      <Box sx={{ mt: 4 }}>
        {filteredUsers.length > 0 ? (
          <List>
            {filteredUsers.map((user) => (
              <ListItem key={user.id} sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                <ListItemText primary={user.name} />
                <Chip label={user.type} className="mr-2" />
                <Chip label={user.status} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="h6" gutterBottom>
            No matching users found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductsPage;
