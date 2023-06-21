import React, { useState } from 'react';
import './Home.css';
import { Button } from './Button';
import './Navbar.css';
function Home() {
    const [button, setButton] = useState(true)

  return (
    <div>
      <h2>Home</h2>
      {button && <Button buttonStyle='btn--outline'>More</Button>}
    </div>
  );
}

export default Home;