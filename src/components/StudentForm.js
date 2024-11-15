import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const StudentForm = ({ showAlert }) => {
  const [formData, setFormData] = useState({
    role: 'student',
    name: "",
    email: "",
    enrollmentNumber: "",
    department: "",
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8000/api/students/";

    try {
      // API request to create a new student
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        showAlert("Account created successfully!", "success");
      }
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;

        // Handle field-specific errors
        if (errorData.email) {
          showAlert(errorData.email[0], "danger");
        }
        if (errorData.enrollmentNumber) {
          showAlert(errorData.enrollmentNumber[0], "danger");
        }
        if (!errorData.email && !errorData.enrollmentNumber) {
          showAlert(errorData.detail || "An error occurred while creating the student.", "danger");
        }
      } else {
        // Network error
        showAlert("Network error. Please try again later.", "danger");
      }
    }
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
