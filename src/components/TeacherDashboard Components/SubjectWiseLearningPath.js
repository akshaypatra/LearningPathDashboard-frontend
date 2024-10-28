import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewSampleDataForLearningPath from '../../SampleData/NewSampleDataForLearningPath';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Chip, Box, LinearProgress, Button } from '@mui/material';
import { green, red } from '@mui/material/colors';

export default function SubjectWiseLearningPath() {
    // eslint-disable-next-line
    const { classId, subjectCode, subject } = useParams();

    // Filter the learning path data based on classId and subjectCode
    const filteredData = NewSampleDataForLearningPath.find(
        (path) => path.classID === classId && path.subjectCode === subjectCode
    );

    // Initialize state with filtered data
    const [learningPathData, setLearningPathData] = useState(filteredData ? JSON.parse(JSON.stringify(filteredData)) : null);

    const calculateCompletionPercentage = (topics) => {
        const completedTopics = topics.filter((topic) => topic.completed).length;
        return Math.round((completedTopics / topics.length) * 100);
    };

    // Function to mark topic as completed
    const markAsCompleted = (unitIndex, topicIndex) => {
        const updatedLearningPath = { ...learningPathData };
        updatedLearningPath.learningPath[unitIndex].topics[topicIndex].completed = true;
        setLearningPathData(updatedLearningPath);
    };

    // Calculate overall completion percentage
    const calculateOverallCompletion = () => {
        if (!learningPathData) return 0;

        const allTopics = learningPathData.learningPath.flatMap(unit => unit.topics);
        const completedTopics = allTopics.filter(topic => topic.completed).length;
        return Math.round((completedTopics / allTopics.length) * 100);
    };

    const overallCompletionPercentage = calculateOverallCompletion();

    return (
        <Box sx={{ padding: 2 }}>
            <h1 className='teacher-dashboard-subjectwise-header' gutterBottom>
                Teacher Dashboard
            </h1>

            {learningPathData ? (
                <Box>
                    <Typography className='teacher-dashboard-subject-header'  variant="h5" gutterBottom>
                        {learningPathData.className} - {learningPathData.subjectName}
                    </Typography>

                    

                    {learningPathData.learningPath.map((unit, unitIndex) => {
                        const completionPercentage = calculateCompletionPercentage(unit.topics);
                        return (
                            <Card key={unit.unitNumber} variant="outlined" sx={{ marginBottom: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" color="text.secondary">
                                        Unit {unit.unitNumber}: {unit.unitName}
                                    </Typography>

                                    {/* Progress Bar for Unit */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={completionPercentage}
                                            sx={{ flexGrow: 1, marginRight: 2 }}
                                        />
                                        <Typography variant="body2" color="text.secondary">
                                            {completionPercentage}%
                                        </Typography>
                                    </Box>

                                    <List>
                                        {unit.topics.map((topic, topicIndex) => (
                                            <ListItem key={topic.day} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <ListItemText
                                                    primary={`Day ${topic.day} - ${topic.topicName}`}
                                                />
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Chip
                                                        label={topic.completed ? 'Completed' : 'Not Completed'}
                                                        sx={{
                                                            backgroundColor: topic.completed ? green[500] : red[500],
                                                            color: 'white',
                                                            marginRight: 1,
                                                        }}
                                                    />
                                                    {!topic.completed && (
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => markAsCompleted(unitIndex, topicIndex)}
                                                        >
                                                            Complete
                                                        </Button>
                                                    )}
                                                </Box>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box>
            ) : (
                <Typography variant="body1">
                    No data found for Class {classId} and Subject Code {subjectCode}.
                </Typography>
            )}

            {/* Overall Progress Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginY: 2  }}>
                        <LinearProgress
                            variant="determinate"
                            value={overallCompletionPercentage}
                            sx={{ flexGrow: 1, marginRight: 2 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            Overall Progress: {overallCompletionPercentage}%
                        </Typography>
            </Box>

            
        </Box>
    );
}
