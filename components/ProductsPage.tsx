"use client";

import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
} from "@mui/material";
import { users } from "../data/user";

const ProductsPage = () => {
  const [serviceType, setServiceType] = useState("");
  const [status, setStatus] = useState("");

  const serviceTypes = Array.from(new Set(users.map(user => user.type)));
  const statuses = Array.from(new Set(users.map(user => user.status)));

  const resetToDefault = () => {
    setServiceType("");
    setStatus("");
  };
  return (
    <>
        <Box sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Service type</InputLabel>
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
                <InputLabel>Status</InputLabel>
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
                <Button variant="contained" color="primary">
                Apply
                </Button>
            </Box>
        </Box>
    </>
);
};

export default ProductsPage;
