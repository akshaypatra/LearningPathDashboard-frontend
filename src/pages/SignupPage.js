import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";

const SignupPage = () => {
  const [role, setRole] = useState(""); // Store the user role: 'Student' or 'Teacher'

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Set the role based on the user's selection
  };

  const handleFormSubmit = (data) => {
    // Combine form data with role and submit to the backend
    const completeData = { ...data, role };
    console.log("Complete Form Data:", completeData);

    // Send data to the backend (example API call)
    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(completeData)
    })
      .then((response) => response.json())
      .then((data) => console.log("Submission response:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        maxWidth: 400,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Signup
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Select Role</InputLabel>
        <Select
          value={role}
          onChange={handleRoleChange}
          label="Select Role"
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
        </Select>
      </FormControl>

      {/* Render the appropriate form based on the role */}
      {role === "Student" && <StudentForm onSubmit={handleFormSubmit} />}
      {role === "Teacher" && <TeacherForm onSubmit={handleFormSubmit} />}

      
    </Box>
  );
};

export default SignupPage;
