import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
    //closeMobileMenu();
  };
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
            <li> 
              <Link to='/' className="logo-link" onClick={closeMobileMenu}>
                <h1>ALORS</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="shopping-icon" >
        <i class="fa-regular fa-cart-shopping"></i>
        </div>
        <div className="menu-icon" >
            <FaUserCircle />
        </div>
        <div className="menu-icon" >
            <FaShoppingCart />
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className='bi bi-list' />
        </div>
        <nav className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Shopping'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Discover
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
            <li className='nav-item'>
              <Link
                to='/Cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
            {/* <li className='nav-item'>Shopping Cart</li>
            <li className='nav-item'>Checkout</li> */}
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