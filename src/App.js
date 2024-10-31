// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail1 from './pages/ProjectDetail1';
import ProjectDetail2 from './pages/ProjectDetail2';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/1" element={<ProjectDetail1 />} />
        <Route path="/project/2" element={<ProjectDetail2 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
