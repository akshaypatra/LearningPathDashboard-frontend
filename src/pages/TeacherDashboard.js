import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { SiSimpleanalytics } from 'react-icons/si';
import axios from 'axios';

export default function TeacherDashboard() {

    

    const navigate=useNavigate();
    const goToAddLearningPathPage=()=>{
            navigate("/new-learning-path");
        }

    


    const [sampleData, setSampleData] = useState([]); // State to store the filtered data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Fetch the data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/learning-paths/');
        const employeeID = localStorage.getItem('employeeID'); // Get the employeeID from localStorage

        if (employeeID) {
          // Filter the data where employeeID matches the one in localStorage
          const filteredData = response.data.filter(item => item.employeeID === employeeID);
          setSampleData(filteredData); // Store the filtered data in state
        } else {
          setError('No employeeID found in local storage');
        }
      } catch (err) {
        setError('Failed to fetch learning paths');
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchData();
  }, []); // Empty dependency array, so this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>{error}</div>; // Show error message if any
  }



  return (
    <div>
        <h1 className='teacher-dashboard-header' >Dashboard</h1>
        <section className='teacher-subject-section'>

            <h1 className='teacher-subject-header'>Classes</h1>
            
            {sampleData.length > 0 ? (
            <ul className='teacher-subject-container' >
            {sampleData.map((item, index) => (
                <li className='teacher-subject-item' key={index}>
                <Link className='teacher-subject-item-link' to={`/learning-path/${item.classID}/${item.subjectCode}/${item.subject}`}>
                     <p><strong>Class:</strong> {item.className} </p>
                     <p><strong>Subject:</strong> {item.subjectName}</p>
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
            
            {sampleData.length > 0 ? (
            <ul className='teacher-subject-container' >
            {sampleData.map((item, index) => (
                <li className='teacher-subject-item' key={index}>
                <Link className='teacher-subject-analysis-item-link' to={`/analytics/${item.classID}/${item.subjectCode}`}>
                     <p><strong>Class:</strong> {item.className} </p>
                     <p><strong>Subject:</strong> {item.subjectName}</p>
                     
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
