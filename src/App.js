
import './App.css';
import TeacherDashboard from './pages/TeacherDashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <section className='navbar-section'>
        <NavBar/>
      </section>
      <section className='body-section'>
       <TeacherDashboard/>
       </section>
    </div>
  );
}

export default App;
