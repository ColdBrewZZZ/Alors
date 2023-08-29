import React, { useState, useEffect, useContext,useRef } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';


function ResetRequest() {
 
  const navigate = useNavigate();
  

  const handleSumbit = () => {
    axios.get('http://localhost:3000/send_email')
      .then(response => {  
        console.log("hello") 
        console.log(response)
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });

  };
  
  return (
    <>
      <div className="text-center mt-4">
        <h1>New Password Request</h1>
        <hr />
      </div>
      <div className="enter-email-container">
       
            <label>Email</label>
            <input type="email" name="email" />
      

        <div className="mt-4 mb-5">
           <Button onClick={handleSumbit}>Submit</Button>
        </div>
        <div className='pb-5'>
          <div className="mb-2">Don't have an account yet?</div>
          <Link to="/Registration">make a new account</Link>
        </div>
       
      </div>
    </>
  );
}

export default ResetRequest;

