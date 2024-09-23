
import './App.css';
import TeacherDashboard from './pages/TeacherDashboard';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <section className='navbar-section'>
        <NavBar/>
      </section>
      <section className='body-section'>
        <Routes>
          <Route path='/'  element={<TeacherDashboard/>} />      
       </Routes>
       </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
