import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Account from './components/pages/Account/Account'
import Contact from './components/pages/Contact/Contact'
import Shopping from './components/pages/Shopping/Shopping';
import ProductPage from './components/pages/Shopping/ProductPage';
import Cart from './components/pages/Shopping/Cart';
import Checkout from './components/pages/Shopping/Checkout';
import Registration from './components/pages/Account/Registration';
import ResetRequest from './components/pages/PasswordReset/ResetRequest';
import PasswordReset from './components/pages/PasswordReset/PasswordReset';
import LoginForm from './components/pages/LoginForm';
//import New from './components/pages/Shopping/New'
import Navbar from './components/CommonComponents/Navbar';
import Footer from './components/CommonComponents/Footer';



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
         <Route path="/Account/*" element={<Account 
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
          <Route path="/ResetRequest" element={<ResetRequest
          />} /> 
           <Route path="/PasswordReset" element={<PasswordReset
          />} /> 
            <Route path="/LoginForm" element={<LoginForm
          />} /> 
        
        </Routes>

        <Footer/>
          
            
    </>
        
    
  );
}

export default App;
