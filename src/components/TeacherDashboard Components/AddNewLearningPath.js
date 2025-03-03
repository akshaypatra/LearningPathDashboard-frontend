import React, { useState,useContext,useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid2 } from '@mui/material';
import LearningPathComponent from './LearningPathComponent'; // Import the learning path component
import { LearningPathContext } from '../../Context/LearningPathContext';



export default function AddNewLearningPath(props) {
  const [className,setClassName]=useState('TY CORE 5');
  const [classID,setClassID]=useState('TYCORE5');
  const [subjectName, setSubjectName] = useState("Computer Science");
  const [subjectCode, setSubjectCode] = useState("21BTCS0016");
  const [unitNumber, setUnitNumber] = useState(1);
  const [generateLearningPath, setGenerateLearningPath] = useState(false);
  const [unitName, setUnitName] = useState("");
  
  const [topics, setTopics] = useState([{ topicName: "", day: 1, completed: false }]);
  const [units, setUnits] = useState([]);
  const [globalDay, setGlobalDay] = useState(1);
  const [employeeID, setEmployeeID] = useState("");
  const { learningPaths, setLearningPaths } = useContext(LearningPathContext);

  // Fetch employee ID from localStorage when the component mounts
  useEffect(() => {
    const storedEmployeeID = localStorage.getItem('employeeID');
    if (storedEmployeeID) {
      setEmployeeID(storedEmployeeID); // Set the employee ID if it exists
    }
  }, []);
  
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
    setTopics([{ topicName: "", day: globalDay + 1,completed:false }]);
    setGlobalDay(globalDay + 1);
  };


  const generatePath = async () => {
    const newLearningPath = {
      learningPathId: String(learningPaths.length + 1),  // Assign a unique ID based on the current number of paths
      classID,
      className,
      subjectName,
      subjectCode,
      progress:0,
      employeeID,
      learningPath: [...units],
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/learning-paths/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLearningPath),
      });
  
      if (response.ok) {
        const result = await response.json();
        // Update global state with the response from the server
        setLearningPaths([...learningPaths, result]);
        setGenerateLearningPath(true);
        props.showAlert("Learning path  posted successfully!", "success");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        props.showAlert("Failed to post learning path. Please try again.", "error");
      }
    } catch (error) {
      console.error("Network error:", error);
      props.showAlert("An error occurred while posting the learning path.", "error");
    }

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
    setTopics([...topics, { topicName: "", day: nextDay,completed: false }]);
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
    className,
    units,
    employeeID,
  };

  return (
    <div className='add-new-learning-path-section'>
        <section className='add-new-learning-path-form'>
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>Add New Learning Path</Typography>
      <form onSubmit={handleSubmit}>


      <TextField
          label="Class Name"
          variant="outlined"
          fullWidth
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
          margin="normal"
        />

      <TextField
          label="Class ID"
          variant="outlined"
          fullWidth
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          required
          margin="normal"
        />


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
          label="Subject Code"
          variant="outlined"
          fullWidth
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
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
