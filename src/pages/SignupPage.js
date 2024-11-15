import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";

const SignupPage = (props) => {
  const [role, setRole] = useState(""); // Store the user role: 'Student' or 'Teacher'

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Set the role based on the user's selection
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
      {role === "Student" && <StudentForm  showAlert={props.showAlert} />}
      {role === "Teacher" && <TeacherForm  showAlert={props.showAlert} />}

      
    </Box>
  );
};

export default SignupPage;
