import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BookAppointment from './pages/BookAppointment'; 
import PatientPortal from './pages/PatientPortal';  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router>
    <div className="container">
      <ToastContainer position="top-right" autoClose={5000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
