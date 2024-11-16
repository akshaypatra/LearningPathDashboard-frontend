import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const TeacherForm = ({ showAlert, history }) => {
  const [formData, setFormData] = useState({
    role: 'teacher',
    name: "",
    email: "",
    employeeID: "",
    password: "",
  });

  // eslint-disable-next-line
  const [error, setError] = useState(""); // To store any error messages
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8000/api/teachers/";

    try {
      // API request to create a new teacher
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 201) {
        showAlert("Teacher account created successfully!", "success");

        // After signup, log in the user automatically using email and password
        const loginResponse = await axios.post("http://127.0.0.1:8000/api/login/", {
          email: formData.email,
          password: formData.password
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (loginResponse.status === 200) {
          const { token } = loginResponse.data;

          // Store the token in localStorage (or any other storage you prefer)
          localStorage.setItem("token", token);

          navigate("/profile");
          window.location.reload();
        }
      }
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;

        // Handle specific error fields from the API response
        if (errorData.email) {
          showAlert(errorData.email[0], "danger"); // Show email error message
        }
        if (errorData.employeeID) {
          showAlert(errorData.employeeID[0], "danger"); // Show employee ID error message
        }

        // General error message (if present)
        if (!errorData.email && !errorData.employeeID) {
          showAlert(errorData.detail || "An error occurred while creating the teacher's account.", "danger");
        }
      } else {
        // If there's no response (e.g., network error)
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
        Teacher Signup
      </Typography>

      {/* Error Message */}
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* Form Fields */}
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
        label="Employee ID"
        name="employeeID"
        value={formData.employeeID}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
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

export default TeacherForm;
