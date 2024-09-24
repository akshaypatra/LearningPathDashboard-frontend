
import './App.css';
import TeacherDashboard from './pages/TeacherDashboard';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddNewLearningPath from './components/AddNewLearningPath';
import { useState } from 'react';
import Alert from './components/Alert';
import { LearningPathProvider } from './Context/LearningPathContext';

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
          
          <Route path='/'  element={<TeacherDashboard showAlert={showAlert} />}  /> 
          <Route path='/new-learning-path' element={<AddNewLearningPath showAlert={showAlert} />} /> 
             
       </Routes>
       </LearningPathProvider> 
       </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
