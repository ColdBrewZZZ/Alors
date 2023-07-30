import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
//import { saveUserToLocalStorage, getUsersFromLocalStorage } from '../../localStorageManager';



const formFields = [
  { label: 'Email', icon: <FaEnvelope />, name: 'email', placeholder: 'Enter Email' },
  { label: 'Password', icon: <FaLock />, name: 'password', placeholder: 'Enter Password' }
];

const message = "We couldn't log you in. Please check your email and password and try again.";

function Login() {
  const [info, setInfo] = useState({ username: '', password: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();
  //const users = getUsersFromLocalStorage() || [];
  const users = [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleLogin = () => {
    const { username, password } = info;
    const userExists = users.find((user) => user.username === username && user.password === password);

    if (userExists) {
      //saveUserToLocalStorage(userExists);
      //navigate('/Profile');
      console.log("hello")
    } else {
      setInvalidLogin(true);
    }
  };

  return (
    <>
      <div className="text-center mt-4">
        <h1>Log In</h1>
        <hr />
      </div>
      <div className="container mb-5">
        {formFields.map((field, index) => (
          <Form.Group controlId={`form${field.name}`} key={index}>
            <Form.Label className='mt-4'>{field.label}</Form.Label>
            <InputGroup>
              <InputGroup.Text>{field.icon}</InputGroup.Text>
              <Form.Control
                type={field.name === 'password' ? 'password' : 'text'}
                name={field.name}
                placeholder={field.placeholder}
                value={info[field.name]}
                onChange={handleInputChange}
              />
            </InputGroup>
            {field.name === 'password' && invalidLogin && <div className="text-danger">{message}</div>}
          </Form.Group>
        ))}

        <div className="mt-4 mb-5">
           <Button onClick={handleLogin}>Log In</Button>
        </div>
        <div className='pb-5'>
          <div className="mb-2">Don't have an account yet?</div>
          <Link to="/Registration">make a new account</Link>
        </div>
       
      </div>
    </>
  );
}

export default Login;

