import React, { useState, useEffect, useContext,useRef } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';


function PasswordReset() {
  

 
  
  return (
    <>
      <div className="text-center mt-4">
        <h1>Make Your New Password</h1>
        <hr />
      </div>
      <div className="enter-email-container">
       
            <label>New Password</label>
            <input type="text" name="password" />
            
            <label>Reenter New Password:</label>
            <input type="text" name="retypePassword"/>
      

        <div className="mt-4 mb-5">
           <Button>Save Changes</Button>
        </div>
        <div className='pb-5'>
          <div className="mb-2">Don't have an account yet?</div>
          <Link to="/Registration">make a new account</Link>
        </div>
       
      </div>
    </>
  );
}

export default PasswordReset;
