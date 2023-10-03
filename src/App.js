import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Auth/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import Forgot from './pages/Auth/Forgot';
// import Home from './pages/component/Home';
import Lgn from './pages/component/Lgn';
import Home from './pages/Auth/Home';
import Addbooks from './pages/Auth/Addbooks';
import AboutUs from './pages/Auth/AboutUs';
import Contact from './pages/Auth/Contact';
import Books from './pages/Auth/Books';
import Profile from './pages/Auth/Profile';
import Footer from './pages/Auth/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addbooks" element={<Addbooks />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/lgn" element={<Lgn />} /> */}

      </Routes>
    </>
  );
}

export default App;
