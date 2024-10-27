 // eslint-disable-next-line
import React, { useContext,useState,useEffect } from 'react';
 // eslint-disable-next-line
import { LearningPathContext } from '../../Context/LearningPathContext';

import sampleLearningPaths from '../../SampleData/sampleLearningPaths';


const LearningPathViewer = () => {
//   const { learningPaths } = useContext(LearningPathContext);

  const [learningPaths, setLearningPaths] = useState([]);
  useEffect(() => {
    // Simulate fetching learning paths data
    setLearningPaths(sampleLearningPaths);
  }, []);
  
  if (!learningPaths || !learningPaths.length) {
    return <p>No learning paths available</p>;
  }

  return (
    <div className='learning-path-viewer'>
      {learningPaths.map((path, index) => (
        <div className='learning-path-viewer-component-container' key={index}>
          <h4 className='learning-path-viewer-path'>Path {path.learningPathId}</h4>
           <h2 className='learning-path-viewer-subject' >{path.subjectName}</h2>
           <hr></hr>
          {path.learningPath.map((unit, unitIndex) => (
            <div className='learning-path-viewer-component-inner-container' key={unitIndex}>
              <h4>Unit {unit.unitNumber}: {unit.unitName}</h4>
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
