import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home'
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="App">
      <Navbar  title="Preet Makeup"/> 
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/gallery' element={<Gallery/>}></Route>
      </Routes> 
      
      <Footer/>
    </div>
  );
}

export default App;
