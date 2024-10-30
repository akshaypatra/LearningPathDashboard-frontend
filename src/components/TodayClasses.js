import React, { useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Checkbox, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TodayClasses = () => {
  const classes = [
    { topic: 'Data Structures', className: 'B.Tech CS 3rd Year', time: '10:00 AM - 11:30 AM' },
    { topic: 'Operating Systems', className: 'B.Tech IT 2nd Year', time: '12:00 PM - 1:30 PM' },
    { topic: 'Computer Networks', className: 'B.Tech EC 3rd Year', time: '2:00 PM - 3:30 PM' },
    { topic: 'Database Management', className: 'B.Tech CS 2nd Year', time: '4:00 PM - 5:30 PM' },
    { topic: 'AI and Machine Learning', className: 'M.Tech AI 1st Year', time: '6:00 PM - 7:30 PM' },
  ];

  const [checked, setChecked] = useState(classes.map(() => false));

  const handleToggle = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  // Get current date
  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options); // Format the date
  };

  // Use Material-UI's theme and useMediaQuery to adjust the dimensions based on the screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is small (mobile)

  return (
    <Paper
      elevation={5}
      style={{
        padding: '10px',
        width: isMobile ? '100%' : '30rem', // Adjust width for mobile (90% of the screen), 30rem for larger screens
        height: isMobile ? 'auto' : '20rem', // Adjust height for mobile (auto), 20rem for larger screens
        overflowY: 'auto',
        margin: '20px auto',
        backgroundColor: '#f3f4f6', // Light background color
        borderRadius:'20px',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        style={{ 
          textAlign: 'center',
          color: '#1976d2', // Primary color (blue)
          fontWeight: 'bold',
        }}
      >
        {getCurrentDate()}
      </Typography>
      <List>
        {classes.map((classItem, index) => (
          <ListItem
            key={index}
            divider
            style={{
              backgroundColor: checked[index] ? '#dcedc8' : '#aee7f2', // Light green when checked, light blue otherwise
              borderRadius: '5px',
              marginBottom: '8px',
              padding: '10px',
            }}
            secondaryAction={
              <Checkbox
                edge="end"
                checked={checked[index]}
                onChange={() => handleToggle(index)}
                style={{ color: '#4caf50' }} // Green color for the checkbox
              />
            }
          >
            <ListItemText
              primary={classItem.topic}
              secondary={`${classItem.className} - ${classItem.time}`}
              primaryTypographyProps={{ style: { color: '#ef5350', fontWeight: 'bold' } }} // Red color for topic
              secondaryTypographyProps={{ style: { color: '#8e24aa' } }} // Purple color for class and time
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodayClasses;
