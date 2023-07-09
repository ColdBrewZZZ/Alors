import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Footer() {
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
        
        <nav>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Footer;
