import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // You would send formData to the backend here.
    // Example: fetch("/api/login", { method: "POST", body: JSON.stringify(formData) });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Login
      </Typography>
      
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
        fullWidth
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
