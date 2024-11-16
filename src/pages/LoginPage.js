import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; 


const LoginPage = ({showAlert}) => {
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
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData,{
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 201) {
        showAlert("Login Successful!", "success");
        console.log("Showing alert:", "Login Successful!");
        navigate("/profile");
      }

      localStorage.setItem("token", response.data.token); // Store the token in localStorage
      localStorage.setItem("role", response.data.role); // Optionally, store the role

      // Redirect the user after successful login 
      navigate("/profile");
      window.location.reload();

    } catch (error) {

      
      //console.error("Login Error:", error.response ? error.response.data : error.message);
      showAlert("Enter valid email or password","danger")
    } finally {
      setLoading(false); // Set loading state to false after request
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

      {/* Show error message if there is an error */}
      {error && <Typography color="error" sx={{ textAlign: "center" }}>{error}</Typography>}

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
        disabled={loading} // Disable button while loading
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
};

export default LoginPage;
