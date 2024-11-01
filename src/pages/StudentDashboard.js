import React from 'react'

import LearningPathViewer from '../components/TeacherDashboard Components/LearningPathViewer';

export default function StudentDashboard() {


  

  return (
    <div>
        <h1 className='student-dashboard-header'>Student Dashboard</h1>
            <section className='LearningPathsSection-student'>
            
            <LearningPathViewer/>
            <br></br>

      
        </section>


    </div>
  )
}
