import React, { useState, useEffect, useContext,useRef } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';


function PasswordReset() {
  

    const formFields = [
     
        { label: 'Password', name: 'password', type:'password'},
        { label: 'Email', name: 'email', type:'email'}
      ];

  
  const [info, setInfo] = useState({
    
    password: '',
    email: '',
    
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost:3000/reset_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        console.log("hello")
      } else {
        console.log("no no", response)
      }
    } catch (error) {
      console.error('Error changing password for the user:', error);
    }
  };

  return (
    <>
    <div className="text-center mt-4">
        <h1>RESET YOUR PASSWORD</h1>
        <hr />
    </div>
    <div className="container d-flex justify-content-center align-items-center" >
      <div className="text-center col-md-6 bg-white rounded pt-5 p-4 my-4 border border-black" >
        <div>  
            {formFields.map((field, index) => (
                    <div className="mb-3" key={index}>
                    <Form.Group controlId={`form${field.name}`}>
                        <InputGroup>
                        <InputGroup.Text>{field.label}:</InputGroup.Text>
                        <Form.Control
                            type={field.type}
                            name={field.name}
                            value={info[field.name]}
                            onChange={handleInputChange}
                        />
                        </InputGroup>
                    </Form.Group>
                    </div>
                ))}
        </div>
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </div>
    </div>
 
      
      
  </>
  );
}

export default PasswordReset;
