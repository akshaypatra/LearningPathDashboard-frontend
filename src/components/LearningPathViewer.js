import React, { useContext } from 'react';
import { LearningPathContext } from '../Context/LearningPathContext';

const LearningPathViewer = () => {
  const { learningPaths } = useContext(LearningPathContext);

  // Ensure learningPaths is defined and an array
  if (!learningPaths || !learningPaths.length) {
    return <p>No learning paths available</p>;
  }

  return (
    <div>
      {learningPaths.map((path, index) => (
        <div key={index}>
          <h2>Learning Path {path.learningPathId}: {path.subjectName}</h2>
          {path.learningPath.map((unit, unitIndex) => (
            <div key={unitIndex}>
              <h3>Unit {unit.unitNumber}: {unit.unitName}</h3>
              <ul>
                {unit.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>Day {topic.day}: {topic.topicName}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LearningPathViewer;
