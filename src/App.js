import './App.css';
import Navbar from './components/Navbar';
import Component  from './components/Info';
import Collage from './components/Collage';
import Course_Home from './components/Course_Home';


function App() {
  return (
    <div className="App">
      <Navbar  title="Preet Makeup"/>  
      <Collage/>
      <Component/>
      <Course_Home/>

    </div>
  );
}

export default App;
