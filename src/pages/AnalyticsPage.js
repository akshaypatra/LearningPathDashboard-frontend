import React from 'react'
import AverageAttenedanceComponent from '../components/AverageAttendanceComponent'
import StudentList from '../components/StudentList'
import ClassAttendanceRecordBarGraph from '../components/ClassAttendanceRecordBarGraph'
export default function AnalyticsPage() {
  return (
    <div className='analytics-page'>

        <section className='analytics-page-section1'>
          <div>
            <section className='analytics-page-section1-class-details'>
              <h3 className='class-name'> TY CORE 5 </h3>
              <h5 className='subject-name'>Subject : User Centric Design </h5>
              <h5 className='class-strength'>Class strength : 64 </h5>
              <hr></hr>

            </section>
            <AverageAttenedanceComponent/>
          </div>
        <ClassAttendanceRecordBarGraph/>
        </section>

        <section className='analytics-page-student-list-container'>
            <h1>List of Students</h1>
            <StudentList/>
        </section>

    </div>
  )
}
