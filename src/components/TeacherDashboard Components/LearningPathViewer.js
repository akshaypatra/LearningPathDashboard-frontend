// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
// eslint-disable-next-line
import NewSampleDataForLearningPath from '../../SampleData/NewSampleDataForLearningPath';

const LearningPathViewer = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [filteredPaths, setFilteredPaths] = useState([]);
  const [classCode, setClassCode] = useState('');
  const [submittedCode, setSubmittedCode] = useState(null);

  useEffect(() => {
    // Simulate fetching learning paths data
    setLearningPaths(NewSampleDataForLearningPath);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCode(classCode); // Set submitted code for filtering
  };

  if (!filteredPaths.length && !submittedCode) {
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
    </>
  );
};

export default LearningPathViewer;
