import React from 'react'

import LearningPathViewer from '../components/TeacherDashboard Components/LearningPathViewer';

export default function StudentDashboard({ showAlert }) {


  

  return (
    <div>
        <h1 className='student-dashboard-header'>Student Dashboard</h1>
            <section className='LearningPathsSection-student'>
            
            <LearningPathViewer showAlert={showAlert}/>
            <br></br>

      
        </section>


    </div>
  )
}
