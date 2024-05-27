import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home'
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Course from './components/Courses';
import { UserProvider } from './components/context/UserContext';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar title="Preet Makeup" />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/gallery' element={<Gallery />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/course' element={<Course />}></Route>
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
