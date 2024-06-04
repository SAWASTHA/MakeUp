import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from './components/Home'
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Course from './components/Courses';
import { UserProvider } from './components/context/UserContext';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <UserProvider>
      <div className="App">
        <Navbar title="Preet Makeup" />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/gallery' element={<Gallery />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/course' element={<Course />}></Route>
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
