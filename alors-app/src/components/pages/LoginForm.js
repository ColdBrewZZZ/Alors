import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';
import useFetch from '../../api/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import { Form, InputGroup, Button } from 'react-bootstrap';

const fieldConfigurations = [
  { name: 'email', type: 'email', label: 'Email', required: true },
  { name: 'password', type: 'password', label: 'Password', required: true },
 
];

const message = "We couldn't log you in. Please check your email and password and try again.";

function LoginForm() {
 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAuth } = useContext(AuthContext);
  const [info, setInfo] = useState({ email: '', password: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, error, fetchData } = useFetch();

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    axios.post('http://localhost:3000/users/login', { email, password })
      .then(response => {  
        if (response.data.success) {   
          setAuth(true);
          
          axios.get('http://localhost:3000/users/set-cookie', {
            withCredentials: true,})
            .then(cookieResponse => {
              
              console.log('Cookie set:', cookieResponse.data);
            })
            .catch(cookieError => {
              console.error('Error setting cookie:', cookieError);
            });
  
          navigate('/Account/OrderHistory');
        } else {
          setInvalidLogin(true);
          
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };
  
 


  return (
    <>
      <div className="text-center mt-4">
        <h1>LOG IN</h1>
        <hr />
       
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className=" text-center col-md-6 bg-white rounded pt-5 p-4 my-4 border border-black">
          <Form onSubmit={handleSubmit(onSubmit)}>
            {fieldConfigurations.map((field) => (
              <div className="mb-3" key={field.name}>
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Text>{field.label}:</InputGroup.Text>
                    <Form.Control
                      type={field.type}
                      {...register(field.name, { required: field.required })}
                    />
                    {field.redStar && <span className="text-danger ms-1">*</span>}
                    {errors[field.name] && <span>This field is required</span>}
                  </InputGroup>
                </Form.Group>
              </div>
            ))}
            <Button type="submit">Log In</Button>
          </Form>
          <div className='py-4 text-left'>
            <div className="mb-2">Don't have an account yet?</div>
            <Link to="/Registration">make a new account</Link>
          </div>
        <div className='pb-5 text-left'>
          <div className="mb-2">Can't remember your password?</div>
          <Link to="/ResetRequest">request a password reset link</Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

