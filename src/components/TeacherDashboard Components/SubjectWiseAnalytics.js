import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import AverageAttendanceComponent from '../AverageAttendanceComponent'
import StudentList from '../StudentList'
import ClassAttendanceRecordBarGraph from '../ClassAttendanceRecordBarGraph'
import ClassDetails from '../../SampleData/ClassDetails'


export default function SubjectWiseAnalytics() {
    const { classId, subjectCode } = useParams();
    const filteredData = ClassDetails.find(
        (path) => path.classID === classId && path.subjectCode === subjectCode
    );

    // eslint-disable-next-line
    const [classDetail, setClassDetail] = useState(filteredData? JSON.parse(JSON.stringify(filteredData)) : null);

  return (
    <div className='subject-wise-analytics-page'>

        <section className='subject-wise-analytics-page-section1'>
          <div>
            <section className='subject-wise-analytics-page-section1-class-details'>
              <h3 className='subject-wise-class-name'> {classDetail.className} </h3>
              <h5 className='subject-wise-subject-name'>Subject : {classDetail.subjectName} </h5>
              <h5 className='subject-wise-class-strength'>Class strength : {classDetail.classStrength} </h5>
              <hr></hr>

            </section>
            <AverageAttendanceComponent/>
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
