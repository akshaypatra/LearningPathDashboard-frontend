import React from 'react'

import LearningPathViewer from '../components/TeacherDashboard Components/LearningPathViewer';

export default function StudentDashboard() {


  

  return (
    <div>
        <h1 className='student-dashboard-header'>Student Dashboard</h1>
        
        <section className='LearningPathsSection-student'>
            <h2 className='student-dashboard-class' > TY CORE 5</h2>
            <LearningPathViewer/>
            <br></br>

      
        </section>


    </div>
  )
}
