import React from 'react';
import { Container, Typography, Grid2} from '@mui/material';

const LearningPathComponent = ({ learningData }) => {
  const generateLearningPath = () => {
    const learningPath = {};
    learningData.units.forEach((unit) => {
      unit.topics.forEach((topic) => {
        const day = topic.day;
        const topicEntry = {
          unitNumber:unit.unitNumber,
          unitName: unit.unitName,
          topicName: topic.topicName,
        };

        if (!learningPath[day]) {
          learningPath[day] = [];
        }
        learningPath[day].push(topicEntry);
      });
    });
    
    return learningPath;
  };

  const learningPath = generateLearningPath();

  return (
    <Container className='learning-path'>
      <Typography variant="h4" gutterBottom >
        {learningData.subjectName}
      </Typography>
      <Grid2 container spacing={3}  >
        {Object.keys(learningPath).map((day) => (
          <Grid2 item xs={12} md={6} key={day} style={{ width:'100vh' }} >
            <div className="learning-path-grid-component" >
              <Typography variant="h5" className='learning-path-grid-component-day' >Day {day}</Typography>
              <ul style={{listStyle:'None',textAlign:'center'}}>
                {learningPath[day].map((topic, index) => (
                  <li key={index}>
                    <div className='learning-path-grid-component-body'>
                        <p>Unit {topic.unitNumber} : {topic.unitName}</p>
                        
                        <p>Topic : {topic.topicName}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default LearningPathComponent;
