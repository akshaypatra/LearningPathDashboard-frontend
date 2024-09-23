import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid2 } from '@mui/material';
import LearningPathComponent from './LearningPathComponent'; // Import the learning path component

export default function AddNewLearningPath() {
  const [unitNumber, setUnitNumber] = useState(1);
  const [generateLearningPath, setGenerateLearningPath] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [subjectName, setSubjectName] = useState("Computer Science");
  const [topics, setTopics] = useState([{ topicName: "", day: 1 }]);
  const [units, setUnits] = useState([]);
  const [globalDay, setGlobalDay] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUnit = {
      unitNumber,
      unitName,
      topics: [...topics],
    };
    setUnits([...units, newUnit]);
    setUnitNumber(unitNumber + 1);
    setUnitName("");
    setTopics([{ topicName: "", day: globalDay + 1 }]);
    setGlobalDay(globalDay + 1);
  };

  const handleTopicChange = (index, event) => {
    const newTopics = [...topics];
    newTopics[index][event.target.name] = event.target.value;
    setTopics(newTopics);
  };

  const addTopic = () => {
    const nextDay = globalDay + 1;
    setTopics([...topics, { topicName: "", day: nextDay }]);
    setGlobalDay(nextDay);
  };

  const removeLastTopic = () => {
    if (topics.length >= 1) {
      const newTopics = topics.slice(0, -1);
      setTopics(newTopics);
      setGlobalDay(globalDay - 1);
    }
  };

  const finalData = {
    subjectName,
    units
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>Add New Learning Path</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Subject Name"
          variant="outlined"
          fullWidth
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          required
          margin="normal"
        />

        <TextField
          label="Unit Number"
          variant="outlined"
          type="number"
          fullWidth
          value={unitNumber}
          onChange={(e) => setUnitNumber(Number(e.target.value))}
          required
          margin="normal"
        />

        <TextField
          label="Unit Name"
          variant="outlined"
          fullWidth
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
          required
          margin="normal"
        />

        <Typography variant="h6" gutterBottom>Topics:</Typography>
        {topics.map((topic, index) => (
          <Grid2 container spacing={1} alignItems="center" key={index}>
            <Grid2 item xs={8} style={{ marginTop: '10px' }}>
              <TextField
                label={`Day ${topic.day}`}
                variant="outlined"
                fullWidth
                name="topicName"
                value={topic.topicName}
                onChange={(e) => handleTopicChange(index, e)}
                placeholder={`Topic ${index + 1}`}
                required
              />
            </Grid2>
            <Grid2 item xs={4}>
              {index === topics.length - 1 && (
                <Button variant="outlined" color="error" onClick={removeLastTopic}>
                  Remove
                </Button>
              )}
            </Grid2>
          </Grid2>
        ))}
        <Button variant="contained" onClick={addTopic} style={{ marginTop: '10px', marginRight: '20px' }}>
          Add Topic
        </Button>

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Save Unit & Add Next Unit
        </Button>

        <Button
          onClick={() => setGenerateLearningPath(true)}
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
        >
          Generate Learning Path
        </Button>
      </form>

      {/* Display Final Structured Data */}
      <div style={{ marginTop: '20px' }}>
        {/* <Typography variant="h6">Final Structured Data</Typography>
        <pre>{JSON.stringify(finalData, null, 2)}</pre> */}

      </div>

      {/* Conditionally render the Learning Path Component */}
      {generateLearningPath && <LearningPathComponent learningData={finalData} />}
    </Paper>
  );
}
