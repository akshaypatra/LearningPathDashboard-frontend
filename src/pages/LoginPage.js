import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 

const LoginPage = ({ showAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // To handle loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true
    setError(""); // Reset error state

    try {
      // Send POST request to backend
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Store token and role in localStorage
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("employeeID", response.data.employeeID);
      localStorage.setItem("classID", response.data.classID);
      

      

      showAlert("Login Successful!", "success"); // Show success alert

      // Redirect to profile page after successful login
      navigate("/profile");
      window.location.reload()
    } catch (err) {
      // Handle errors and set error messages
      const errorMessage =
        err.response?.data?.detail || "Invalid email or password. Please try again.";
      setError(errorMessage);
      showAlert(errorMessage, "danger");
    } finally {
      setLoading(false); // Reset loading state
    }
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

      {/* Display error message if any */}
      {error && (
        <Typography color="error" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      )}

      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        disabled={loading} // Disable field while loading
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required
        disabled={loading} // Disable field while loading
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
        fullWidth
        disabled={loading} // Disable button while loading
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
};

export default LoginPage;
