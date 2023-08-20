import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Account from './components/pages/Account/Account'
import Contact from './components/pages/Contact'
import Shopping from './components/pages/Shopping';
import ProductPage from './components/pages/ProductPage';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Registration from './components/pages/Registration';
//import New from './components/pages/Shopping/New'
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
          <Route path="/Contact" element={<Contact 
          />} /> 
          <Route path="/Shopping" element={<Shopping
          />} /> 
           <Route path="/ProductPage" element={<ProductPage
          />} /> 
           <Route path="/Cart" element={<Cart
          />} /> 
          <Route path="/Checkout" element={<Checkout
          />} /> 
           <Route path="/Registration" element={<Registration
          />} /> 
        
        </Routes>

        <Footer/>
          
            
    </>
        
    
  );
}

export default App;
