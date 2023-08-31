import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Registration() {
  const navigate = useNavigate();
    const formFields = [
        { label: 'Email', name: 'email', type:'email'},
        { label: 'Password', name: 'password', type:'password'},
        { label: 'Re-enter Password', name: 're-password', type:'password'},
        { label: 'Title', name: 'title', type:'text'},
        { label: 'First Name', name: 'first_name', type:'text'},
        { label: 'Last Name', name: 'last_name', type:'text' },
        { label: 'Phone number', name: 'phone', type:'text' },
        { label: 'Birthday', name: 'birthday', type:'date'}
      ];

  // State variables to store form data
  const [info, setInfo] = useState({
    email: '',
    password: '',
    title: '',
    first_name: '',
    last_name: '',
    phone: '',
    birthday: '',
  });

  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server to insert data into the database
      const response = await fetch('http://localhost:3000/insert_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        navigate('/Account/OrderHistory');
        console.log("hello")
      } else {
        console.log("no no")
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <>
    <div className="text-center mt-4">
        <h1>CREATE AN ALORS ACCOUNT</h1>
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

export default Registration;