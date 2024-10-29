import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { SiSimpleanalytics } from 'react-icons/si';


export default function TeacherDashboard() {

    const [classSubjects, setClassSubjects] = useState([]);
    const [loading, setLoading] = useState(true);


    const navigate=useNavigate();
    const goToAddLearningPathPage=()=>{
            navigate("/new-learning-path");
        }

    useEffect(() => {


        


        // Simulating an API call with static sample data
        const fetchClassesAndSubjects = () => {
        
        const sampleData = [
            { class: 'TY CORE 5 ',classID:'TYCORE5', subject: 'Operating Systems' ,subjectCode:'21BTCS01',progress:0.7 },
            { class: 'TY CORE 4',classID:'TYCORE4', subject: 'Operating Systems',subjectCode:'21BTCS01',progress:0.9 },
            { class: 'FY 15',classID:'FY15', subject: 'Engineering Physics',subjectCode:'21BTCS010',progress:0.2 },
            { class: 'SY 9',classID:'SY9', subject: 'Discrete Mathematics',subjectCode:'21BTCS0111',progress:0.5 }
        ];

        // Setting data with a delay to simulate loading
        setTimeout(() => {
            setClassSubjects(sampleData);
            setLoading(false);
        }, 1000); // Adjust delay as needed
        };

        fetchClassesAndSubjects();
    }, []);

    if (loading) return <p>Loading...</p>;

  return (
    <div>
        <h1 className='teacher-dashboard-header' >Teacher Dashboard</h1>
        <section className='teacher-subject-section'>

            <h1 className='teacher-subject-header'>Classes</h1>
            
            {classSubjects.length > 0 ? (
            <ul className='teacher-subject-container' >
            {classSubjects.map((item, index) => (
                <li className='teacher-subject-item' key={index}>
                <Link className='teacher-subject-item-link' to={`/learning-path/${item.classID}/${item.subjectCode}/${item.subject}`}>
                     <p><strong>Class:</strong> {item.class} </p>
                     <p><strong>Subject:</strong> {item.subject}</p>
                     <p >   <progress className='teacher-subject-progressbar' value={item.progress} />  {item.progress*100} %</p>
                </Link>
                </li>
            ))}
            </ul>
        ) : (
            <p>No classes or subjects found.</p>
        )}
        

        <button onClick={goToAddLearningPathPage} className='learning-path-create-button'><FaPlus size={18}  className='react-icons' />Add New</button>
        </section>

        <section className='teacher-analysis-section'>
        <h1 className='teacher-subject-header'><SiSimpleanalytics size={28}  className='react-icons' />Analytics</h1>
            
            {classSubjects.length > 0 ? (
            <ul className='teacher-subject-container' >
            {classSubjects.map((item, index) => (
                <li className='teacher-subject-item' key={index}>
                <Link className='teacher-subject-analysis-item-link' to={`/analytics/${item.classID}/${item.subjectCode}`}>
                     <p><strong>Class:</strong> {item.class} </p>
                     <p><strong>Subject:</strong> {item.subject}</p>
                     
                </Link>
                </li>
            ))}
            </ul>
        ) : (
            <p>No classes or subjects found.</p>
        )}
        </section>

    </div>
  )
}
