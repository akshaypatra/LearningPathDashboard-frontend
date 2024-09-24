import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import LearningPathViewer from '../components/LearningPathViewer';

export default function TeacherDashboard() {
    const navigate=useNavigate();
    const goToAddLearningPathPage=()=>{
        navigate("/new-learning-path");
    }
  return (
    <div>
        <h1 className='teacher-dashboard-header'>Dashboard</h1>
        <section className='LearningPathsSection-teacher'>
            <h3 className='LearningPathsSection-teacher-header'>Your Learning Paths</h3>
            <LearningPathViewer/>
            <br></br>

         <button onClick={goToAddLearningPathPage} className='learning-path-create-button'><FaPlus size={18}  className='react-icons' />Add New</button>
        </section>


    </div>
  )
}
