"use client";

import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const PeoplePage = () => {
  const [searchText, setSearchText] = useState("");

  const resetToDefault = () => {
    setSearchText("");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

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
    </Box>
  );
};

export default PeoplePage;

