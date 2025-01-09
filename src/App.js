import './App.css';
import StudentDashboard from './pages/StudentDashboard';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewLearningPath from './components/TeacherDashboard Components/AddNewLearningPath';
import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import { LearningPathProvider } from './Context/LearningPathContext';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TeacherDashboard from './pages/TeacherDashboard';
import SubjectWiseLearningPath from './components/TeacherDashboard Components/SubjectWiseLearningPath';
import SubjectWiseAnalytics from './components/TeacherDashboard Components/SubjectWiseAnalytics';

function App() {
  const [alert, setAlert] = useState(null);
  const [role, setRole] = useState(null);

  // Fetch role from localStorage on initial load
  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    setRole(savedRole);
  }, []);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <section className="navbar-section">
          <NavBar />
        </section>
        <section className="body-section">
          <LearningPathProvider>
            <Alert alert={alert} />
            <Routes>
              <Route
                path="/"
                element={
                  role === 'student' ? (
                    <StudentDashboard showAlert={showAlert} />
                  ) : role === 'teacher' ? (
                    <TeacherDashboard showAlert={showAlert} />
                  ) : (
                    <LoginPage showAlert={showAlert} />
                  )
                }
              />
              <Route
                path="/learning-path/:classId/:subjectCode/:subject"
                element={<SubjectWiseLearningPath />}
              />
              <Route
                path="/new-learning-path"
                element={<AddNewLearningPath showAlert={showAlert} />}
              />
              <Route path="/profile" element={<ProfilePage showAlert={showAlert} />} />
              <Route path="/analytics" element={<AnalyticsPage showAlert={showAlert} />} />
              <Route
                path="/analytics/:classId/:subjectCode"
                element={<SubjectWiseAnalytics showAlert={showAlert} />}
              />
              <Route path="/login" element={<LoginPage showAlert={showAlert} />} />
              <Route path="/signin" element={<SignupPage showAlert={showAlert} />} />
              {/* Fallback Route */}
              <Route
                path="*"
                element={<LoginPage showAlert={showAlert} />}
              />
            </Routes>
          </LearningPathProvider>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
