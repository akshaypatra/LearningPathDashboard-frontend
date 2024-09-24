import React, { useState,useContext } from 'react';
import { TextField, Button, Typography, Paper, Grid2 } from '@mui/material';
import LearningPathComponent from './LearningPathComponent'; // Import the learning path component
import { LearningPathContext } from '../Context/LearningPathContext';

export default function AddNewLearningPath(props) {
  const [unitNumber, setUnitNumber] = useState(1);
  const [generateLearningPath, setGenerateLearningPath] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [subjectName, setSubjectName] = useState("Computer Science");
  const [topics, setTopics] = useState([{ topicName: "", day: 1 }]);
  const [units, setUnits] = useState([]);
  const [globalDay, setGlobalDay] = useState(1);

  const { learningPaths, setLearningPaths } = useContext(LearningPathContext);
  
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


  const generatePath = () => {
    const newLearningPath = {
      learningPathId: String(learningPaths.length + 1),  // Assign a unique ID based on the current number of paths
      subjectName,
      learningPath: [...units],
    };

    // Update the global state by adding the new learning path to the array
    setLearningPaths([...learningPaths, newLearningPath]);

    setGenerateLearningPath(true) ; 
    props.showAlert("Learning path generated successfully","success");
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
      props.showAlert("Topic removed successfully","success");
    }
  };

  const finalData = {
    subjectName,
    units
  };

  return (
    <div className='add-new-learning-path-section'>
        <section className='add-new-learning-path-form'>
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

        <Button type="submit" onClick={()=>{props.showAlert("Unit saved  successfully","success");}}  variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Save Unit & Add Next Unit
        </Button>

        <Button
          onClick={generatePath}
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
        >
          Generate Learning Path
        </Button>
      </form>

      

      
      
    </Paper>
    </section>
    <section className='generated-learning-path-section'>
        <h1 className='generated-learning-path-section-header'>Generated Learning Path</h1>
        {generateLearningPath ? (
          <LearningPathComponent learningData={finalData}  />
        ) : (
          <Typography variant="body1" color="textSecondary" className='alternate-message-learning-path'>
            No learning path generated.
          </Typography>
        )}
    </section>
    </div>
  );
}
