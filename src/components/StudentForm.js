import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";


const StudentForm = ({ showAlert }) => {

  // eslint-disable-next-line
  const [error, setError] = useState(""); // To store any error messages


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const apiUrl = "http://127.0.0.1:8000/api/students/";

    try {
      // API request to create a new teacher
      const response = await axios.post(apiUrl, formData,{
        headers: {
          'Content-Type': 'application/json', 
        }
      });

      if (response.status === 201) {
        
        showAlert("Account created successfully!","success");
        
      }else{
        const errorData = await response.json();
        
        if (errorData.email) {
          // Show email error message to user
          showAlert(errorData.email[0],"danger")
          // console.log("Email error:", errorData.email[0]);
        }
        if (errorData.employeeID) {
          // Show employeeID error message to user
          showAlert(errorData.employeeID[0],"danger")
          //console.log("Employee ID error:", errorData.employeeID[0]);
      }
      }
    } catch (error) {
      if (error.response) {
        // If there is an error response from the server, show it
        showAlert(error.response.data.detail,"danger")
        //setError(error.response.data.detail || "An error occurred while creating the teacher.");
      } else {
        // If there is no response (network error, etc.)
        showAlert("Network error. Please try again later.","danger");
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
