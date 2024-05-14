import './App.css';
import Navbar from './components/Navbar';
import Component  from './components/Info';
import Collage from './components/Collage';


function App() {
  return (
    <div className="App">
      <Navbar  title="Preet Makeup"/>  
      <Collage/>
      <Component/>

    </div>
  );
}

export default App;
