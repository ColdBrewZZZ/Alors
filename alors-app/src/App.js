import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';


import './App.css';

function App() {
  return (
    <>
        
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home 
          />} />
          <Route path="/About" element={<About 
          />} /> 
        </Routes>
          
     
    </>
        
    
  );
}

export default App;
