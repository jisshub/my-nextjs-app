"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { users } from "../data/user";

const PeoplePage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("name");

  const resetToDefault = () => {
    setSearchText("");
    setSearchOption("name");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    searchOption === "name"
      ? user.name.toLowerCase().includes(searchText.toLowerCase())
      : user.tag.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}>
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={searchOption}
          onChange={handleSearchOptionChange}
        >
          <FormControlLabel
            value="name"
            control={<Radio />}
            label="Search by name"
          />
          <FormControlLabel
            value="tag"
            control={<Radio />}
            label="Search by tags"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={`Search ${searchOption === "name" ? "service name" : "tags"}`}
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
              <CiSearch size={"30"} />
            </Box>
          ),
          endAdornment: searchText ? (
            <IconButton onClick={() => setSearchText("")}>
              <IoIosCloseCircleOutline size={"30"} />
            </IconButton>
          ) : null,
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Button
          variant="contained"
          onClick={resetToDefault}
          sx={{
            backgroundColor: '#f5f5f5',
            color: 'black',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          Reset to Default
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        {searchText && (
          <Typography variant="h6" gutterBottom>
            Showing {filteredUsers.length} results matching '{searchText}'
          </Typography>
        )}
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
      </Box>
    </Box>
  );
};

export default PeoplePage;
