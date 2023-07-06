import React, { useState } from 'react';
import './Home.css';
import { Button } from '../Button';
import '../Navbar.css';
import '../../App.css';
import HeroSection from '../HeroSection';


function Home() {
    const [button, setButton] = useState(true)

  return (
    <div>
      <HeroSection/>
      {button && <Button buttonStyle='btn--outline'>More</Button>}
    </div>
  );
}

export default Home;