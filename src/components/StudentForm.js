import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const StudentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    role:'student',
    name: "",
    email: "",
    enrollmentNumber: "",
    department: "",
    password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data back to the main form handler
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Student Signup
      </Typography>
      
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Enrollment Number"
        name="enrollmentNumber"
        value={formData.enrollmentNumber}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        fullWidth
      />

    <TextField
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
      />    

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default StudentForm;
