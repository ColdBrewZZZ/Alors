import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Account from './components/pages/Account/Account'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
          <Route path="/Account" element={<Account 
          />} /> 
        </Routes>

      
          
            
    </>
        
    
  );
}

export default App;
