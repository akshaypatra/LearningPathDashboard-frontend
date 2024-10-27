import React from 'react'
import { useParams } from 'react-router-dom';


export default function SubjectWiseLearningPath() {
    const { classId, subjectCode,subject } = useParams();

    return (
      <div>
        <h1 className='teacher-dashboard-header' >Teacher Dashboard</h1>
        <h2>Learning Path for Class {classId} - {subjectCode}</h2>
        {/* Add details of the learning path here */}
        <p>Here you can display the learning path content for {subject} in class {classId}.</p>
      </div>
    );
}
