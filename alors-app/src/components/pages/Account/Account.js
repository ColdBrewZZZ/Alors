import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';




function App() {
  return (
    <>
        
  
        
        <Routes>
          <Route path="/" element={<Login 
          />} />
          
        </Routes>
          
            
    </>
        
    
  );
}

export default App;
