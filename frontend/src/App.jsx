import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Careers from './pages/Careers/Careers';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import ContactUs from './pages/ContactUs/ContactUs';
import CourseDetails from './components/CourseDetails/CourseDetails'; // Import CourseDetails
import CourseForm from './components/CourseForm/CourseForm'; // Import CourseForm
import Footer from './components/Footer/Footer'; // Optional Footer component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Blogs from './pages/Blogs/Blogs';
import ComingSoon from './components/ComingSoon/ComingSoon';
import CareerApplicationForm from './components/CareerApplicationForm/CareerApplicationForm';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import About from './pages/About/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/courses/:courseName" element={<CourseDetails />} /> 
        <Route path="/enroll/:courseName" element={<CourseForm />} /> 
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/shop" element={<ComingSoon />} />
        <Route path="/events" element={<ComingSoon />} />
        <Route path="/login" element={<ComingSoon />} />
        <Route path="/apply" element={<CareerApplicationForm />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
