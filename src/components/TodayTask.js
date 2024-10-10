import React, { useState } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function TodayTask() {
  const tasks = [
    "Complete React project",
    "Attend team meeting at 2 PM",
    "Ty core 4 class",
    "Team Meeting",
    "Attend team meeting at 4 PM",
    "Attend team meeting at 6 PM",
    "Attend team meeting at 7 PM",
  ];

  const [checked, setChecked] = useState([false, false, false, false, false, false, false]);

  const handleToggle = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  // Use Material-UI's theme and useMediaQuery to adjust the dimensions based on the screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is small (mobile)

  return (
    <div className="todays-task-div">
      <Paper
        elevation={5}
        style={{
          padding: '10px',
          width: isMobile ? '100%' : '30rem',  // Adjust width for mobile (90% of the screen), 12rem for larger screens
          height: isMobile ? '15rem' : '20rem', // Adjust height for mobile (15rem), 20rem for larger screens
          overflowY: 'auto', // Enable scrolling
          margin: '20px auto',
          backgroundColor: '#f9fbe7', 
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{
            textAlign: 'center',
            color: '#1e88e5', // Blue color for the title
            fontWeight: 'bold',
            fontSize: isMobile ? '1.2rem' : '1.5rem', // Adjust font size for mobile
          }}
        >
          Today's Tasks
        </Typography>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              divider
              style={{
                backgroundColor: checked[index] ? '#c8e6c9' : '#ffecb3', // Light green if checked, light yellow otherwise
                borderRadius: '5px',
                marginBottom: '8px',
                padding: '10px',
              }}
              secondaryAction={
                <Checkbox
                  edge="end"
                  checked={checked[index]}
                  onChange={() => handleToggle(index)}
                  style={{ color: '#43a047' }} // Green checkbox
                />
              }
            >
              <ListItemText
                primary={task}
                primaryTypographyProps={{
                  style: { color: checked[index] ? '#2e7d32' : '#d32f2f', fontWeight: 'bold' }, // Red text when unchecked, green when checked
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
