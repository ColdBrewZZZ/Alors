import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="nav-container col-12">
        <div className="logo">
          <ul>
            <li><h1>ALORS</h1></li>
          </ul>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className='bi bi-list' />
        </div>
        <nav className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Account</li>
            <li>Shopping Cart</li>
            <li>Checkout</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;




{/* <nav class='navbar'>
       
          <Link to='/' class='navbar-logo' onClick={closeMobileMenu}>
            ALORS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className='bi bi-list' />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>
          </ul>
          
      
      </nav> */}