import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function Navbar() {
    const {click, setClick} = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
           setButton(false) 
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav class="navbar">
                <div class="container-fluid">
                    <Link to="/" className="navbar-logo">
                        ALORS
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i class="bi bi-list"></i>
                    </div>
                    <ul class={click ? 'nev-menu active' : 'nav-menu' }>
                        <li class="nav-item">
                            <Link to={'/'} className="nav-link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li class="nav-item"> 
                            <Link to={'/About'} className="nav-link" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                    {button && <button buttonStyle='btn--outline'>Heyy</button>}
                </div>
</nav>
        </>
    )
}

export default Navbar

