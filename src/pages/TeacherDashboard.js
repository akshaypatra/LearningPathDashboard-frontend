import React from 'react'

export default function TeacherDashboard() {
  return (
    <div>
        <h1 className='teacher-dashboard-header'>Learning Path Dashboard</h1>
        <section className='LearningPathsSection-teacher'>
            <h3 className='LearningPathsSection-teacher-header'>Your Learning Paths</h3>
            No learning paths yet
            <br></br>

         <button className='learning-path-create-button'>Create One</button>
        </section>


    </div>
  )
}
