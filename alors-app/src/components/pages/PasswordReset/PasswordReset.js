import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';




function PasswordReset() {
  const [searchParams ] = useSearchParams();

    const formFields = [
     
        { label: 'New Password', name: 'password', type:'password'},
        { label: 'Reenter New Password', name: 'repassword', type:'repassword'},
       
      ];

  const token = searchParams.get('token');
  console.log(token);


  const [info, setInfo] = useState({
    
    password: '',
    token: token
    
    
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
    <div className="container d-flex justify-content-center align-items-center mb-5 py-5" >
      <div className="text-center col-md-6 bg-white rounded py-5 p-4 my-5 border border-black" >
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
