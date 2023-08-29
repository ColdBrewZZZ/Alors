import React, { useState, useEffect, useContext, useRef } from 'react';
import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';





// const formFields = [
//   { label: 'Email', icon: <FaEnvelope />, name: 'email', placeholder: 'Enter Email' }
// ];



function ResetRequest() {
  const { setAuth } = useContext(AuthContext);
  const [info, setInfo] = useState({ email: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const form = useRef();

  const handleSumbit = () => {
    emailjs.sendForm('service_ID', 'template_m2wc0nj',form.current, 'JSIWaduAyIFahqO1D' )
        .then((result) => {
            console.log(result);
            console.log("mssage sent yay");
        }, (error) => {
            console.log(error);
        });
  };
  
 
  
  

  return (
    <>
      <div className="text-center mt-4">
        <h1>New Password Request</h1>
        <hr />
      </div>
      <div className="enter-email-container">
        <form ref={form} onSubmit={handleSumbit}>
        
        <label>Email</label>
        <input type="email" name="email" />
        
        
        </form>

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

