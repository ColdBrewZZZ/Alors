import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'




const formFields = [
  { label: 'Email', icon: <FaEnvelope />, name: 'email', placeholder: 'Enter Email' },
  { label: 'Password', icon: <FaLock />, name: 'password', placeholder: 'Enter Password' }
];

const message = "We couldn't log you in. Please check your email and password and try again.";

function Login() {
  const [info, setInfo] = useState({ email: '', password: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleLogin = () => {
    const { email, password } = info;
    const userExists = users.find((user) => user.email === email && user.password === password);

    if (userExists) {
      
      navigate('/Account/OrderHistory');
      
    } else {
      setInvalidLogin(true);
      console.log(users);
    }
  };

  
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
      });
  }, []);

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

