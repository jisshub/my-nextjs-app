"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, List, ListItem, ListItemText, Chip, Checkbox } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const users = [
  {
    id: 1,
    name: "Abin",
    tag: "Attendee"
  },
  {
    id: 2,
    name: "Ajith",
    tag: "Payer"
  },
  {
    id: 3,
    name: "Alan",
    tag: "Payer"
  },
  {
    id: 4,
    name: "Alex",
    tag: "Attendee"
  },
  {
    id: 5,
    name: "Akash",
    tag: "Attendee"
  }
];

const PeoplePage = () => {
  const [searchText, setSearchText] = useState("");

  const resetToDefault = () => {
    setSearchText("");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Payer or attendee name"
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
              <CiSearch size={"30"} />
            </Box>
          ),
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={resetToDefault}>
          Reset to Default
        </Button>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        {searchText && (
          <Typography variant="h6" gutterBottom>
            Showing {filteredUsers.length} results matching '{searchText}'
          </Typography>
        )}
        <List>
          {filteredUsers.map(user => (
            <ListItem key={user.id} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <ListItemText primary={user.name} />
              <Chip label={user.tag} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PeoplePage;
