// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';



const LearningPathViewer = ({ showAlert }) => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [filteredPaths, setFilteredPaths] = useState([]);
  const [classCode, setClassCode] = useState('');
  const [submittedCode, setSubmittedCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedClassCode = localStorage.getItem('classID');
    if (storedClassCode && storedClassCode!=="null") {
       setSubmittedCode(storedClassCode);
    }
  }, []);


  useEffect(() => {
    // Fetch learning paths from API
    const fetchLearningPaths = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/learning-paths/');
        if (!response.ok) {
          throw new Error('Failed to fetch learning paths');
        }
        const data = await response.json();
        setLearningPaths(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningPaths();
  }, []);


  useEffect(() => {
    // Filter learning paths based on submitted class code
    if (submittedCode) {
      const filtered = learningPaths.filter(path => path.classID === submittedCode);
      setFilteredPaths(filtered);
    } else {
      setFilteredPaths([]);
    }
  }, [submittedCode, learningPaths]);

  const handleInputChange = (e) => {
    setClassCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedAuthToken = localStorage.getItem('token');
    if (!storedAuthToken) {
      console.error('No auth token found. Please log in.');
      return;
    }

    localStorage.setItem('classID', classCode);
    setSubmittedCode(classCode); // Set submitted code for filtering

    try {
      const response = await fetch('http://127.0.0.1:8000/api/update_class_id/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedAuthToken}`, // Send token in Authorization header
        },
        body: JSON.stringify({ classID: classCode }),
      });
  
      if (!response.ok) {
        showAlert("Failed to update class ID", "danger");
        throw new Error('Failed to update class ID');
      }
  
 
      // console.log('Class ID updated successfully:', data);
      showAlert(`Class ID updated successfully `, "success");
  
    } catch (error) {
      // console.error('Error updating class ID:', error.message);
      showAlert(`Error updating class ID:${error.message}`, "danger");
    }
  };


  const exitClass = async () => {
    localStorage.removeItem('classID'); 
    setSubmittedCode(null);

    const storedAuthToken = localStorage.getItem('token');
    if (!storedAuthToken) {
      console.error('No auth token found. Please log in.');
      return;
    }
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/update_class_id/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedAuthToken}`, // Send token in Authorization header
        },
        body: JSON.stringify({ classID:null }),
      });
      const data = await response.json(); // Parse response JSON
      console.log("Server Response:", data); // Debug API response
  
      if (!response.ok) {
        showAlert("Failed to update class ID", "danger");
        throw new Error('Failed to update class ID');
      }
  
    
      // console.log('Class ID updated successfully:', data);
      showAlert(`Class ID updated successfully `, "success");
  
    } catch (error) {
      // console.error('Error updating class ID:', error.message);
      showAlert(`Error updating class ID:${error.message}`, "danger");
    }
   
  };
  

  if (loading) {
    return <p>Loading learning paths...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!filteredPaths.length && !submittedCode ) {
    return (
      <form className='student-dashboard-classCode-form' onSubmit={handleSubmit}>
        <p className='classCode-form-header'>Enter Class Code</p>
        <input 
          className='classCode-form-input' 
          placeholder='Enter Class Code'
          value={classCode}
          onChange={handleInputChange}
        />
        <button className='classCode-form-submit' type='submit'>Submit</button>
      </form>
    );
  }

  if (!filteredPaths.length && submittedCode) {
    return <p>No learning paths found for class code "{submittedCode}".</p>;
  }

  return (
    <>
     
      <h2 className='student-dashboard-class'>{filteredPaths[0].className}</h2>

      <div className='learning-path-viewer'>
        {filteredPaths.map((path, index) => {
          // Calculate completion metrics
          const totalTopics = path.learningPath.reduce((total, unit) => total + unit.topics.length, 0);
          const completedTopics = path.learningPath.reduce((total, unit) => total + unit.topics.filter(topic => topic.completed).length, 0);
          const completionPercentage = (completedTopics / totalTopics) * 100 || 0;

          return (
            <div className='learning-path-viewer-component-container' key={index}>
              <div className='learning-path-header'>
              <h4 className='learning-path-viewer-path'>Path {path.learningPathId}</h4>
              <h2 className='learning-path-viewer-subject'>{path.subjectName}</h2>

              {/* Completion Bar */}
              <Box sx={{ width: '100%', marginBottom: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {completedTopics} out of {totalTopics} topics completed
                </Typography>
                <LinearProgress variant="determinate" value={completionPercentage} />
              </Box>
              </div>

              <hr />
              <div className='scrollable-topics'>
              {path.learningPath.map((unit, unitIndex) => (
                <div className='learning-path-viewer-component-inner-container' key={unitIndex}>
                  <h4>Unit {unit.unitNumber}: {unit.unitName}</h4>
                  <ul>
                    {unit.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        Day {topic.day}: {topic.topicName} 
                        {topic.completed 
                          ? <span className="completed"></span> // Green circle for completed
                          : <span className="not-completed"></span> // Red circle for not completed
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className='learning-path-viewer-exit-button-div'>
      {filteredPaths.length > 0 && (
            <button className="exit-class-button" onClick={exitClass}>
              Exit Class
            </button>
        )}
      </div>
    </>
  );
};

export default LearningPathViewer;
