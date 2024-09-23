import React from 'react';
import { Container, Typography, Grid2, Paper } from '@mui/material';

const LearningPathComponent = ({ learningData }) => {
  const generateLearningPath = () => {
    const learningPath = {};
    learningData.units.forEach((unit) => {
      unit.topics.forEach((topic) => {
        const day = topic.day;
        const topicEntry = {
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
    <Container>
      <Typography variant="h4" gutterBottom>
        Learning Path: {learningData.subjectName}
      </Typography>
      <Grid2 container spacing={3} style={{liststyle:'None'}}>
        {Object.keys(learningPath).map((day) => (
          <Grid2 item xs={12} md={6} key={day} style={{ width:'100vh'  }}>
            <Paper elevation={3}>
              <Typography variant="h5">Day {day}</Typography>
              <ul>
                {learningPath[day].map((topic, index) => (
                  <li key={index}>
                    <Typography variant="body1">
                      {topic.unitName}: {topic.topicName}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default LearningPathComponent;
