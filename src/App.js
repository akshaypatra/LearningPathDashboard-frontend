
import './App.css';
import StudentDashboard from './pages/StudentDashboard';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddNewLearningPath from './components/TeacherDashboard Components/AddNewLearningPath';
import { useState } from 'react';
import Alert from './components/Alert';
import { LearningPathProvider } from './Context/LearningPathContext';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TeacherDashboard from './pages/TeacherDashboard';
import SubjectWiseLearningPath from './components/TeacherDashboard Components/SubjectWiseLearningPath';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

          
        setAlert({
              msg:message,
              type:type
                })
              setTimeout(() => {
                setAlert(null);
              }, 2000);
  }

  return (
    <BrowserRouter>
    <div className="App">
      <section className='navbar-section'>
        <NavBar/>
      </section>
      <section className='body-section'>
        <Alert alert={alert}/>
        <LearningPathProvider>
        <Routes>
          <Route path='/teacher'  element={<TeacherDashboard showAlert={showAlert} />}  /> 
          <Route path="/learning-path/:classId/:subjectCode/:subject" element={<SubjectWiseLearningPath />} />
          <Route path='/student'  element={<StudentDashboard showAlert={showAlert} />}  /> 
          <Route path='/new-learning-path' element={<AddNewLearningPath showAlert={showAlert} />} /> 
          <Route path='/profile' element={<ProfilePage showAlert={showAlert} />} />  
          <Route path='/analytics' element={<AnalyticsPage showAlert={showAlert} />} /> 
          <Route path='/login' element={<LoginPage showAlert={showAlert} />} /> 
          <Route path='/signin' element={<SignupPage showAlert={showAlert} />} /> 
       </Routes>
       </LearningPathProvider> 
       </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
