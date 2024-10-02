import React from 'react'
import AverageAttenedanceComponent from '../components/AverageAttendanceComponent'
import StudentList from '../components/StudentList'
export default function AnalyticsPage() {
  return (
    <div className='analytics-page'>AnalyticsPage
        <section>
        <AverageAttenedanceComponent/>
        </section>

        <section className='analytics-page-student-list-container'>
            <h1>List of Students</h1>
            <StudentList/>
        </section>

    </div>
  )
}
