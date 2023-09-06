import React from 'react';
import { useForm } from 'react-hook-form';
import useFetch from '../../../api/useFetch';
import { Form, InputGroup, Button } from 'react-bootstrap';

const fieldConfigurations = [
  { name: 'email', type: 'email', label: 'Email', required: true, redStar: true },
  { name: 'password', type: 'password', label: 'Password', required: true, redStar: true },
  { name: 'repassword', type: 'password', label: 'Reenter Password', required: true, redStar: true  },
  { name: 'title', type: 'text', label: 'Title', required: false },
  { name: 'first_name', type: 'text', label: 'First Name', required: true, redStar: true  },
  { name: 'last_name', type: 'text', label: 'Last Name', required: true, redStar: true  },
  { name: 'phone', type: 'text', label: 'Phone Number', required: false },
  { name: 'birthday', type: 'date', label: 'Birthday', required: false },
];

function LoginForm() {
  const { isLoading, error, data, fetchData } = useFetch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      if (formData.password !== formData.repassword) {
        alert("Passwords don't match");
        return;
      }

      if (formData.password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }

      const response = await fetchData('http://localhost:3000/insert_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (isLoading) {
        return <div>Loading...</div>;
      } else {
        console.log('navigate to orders page');
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
        <p>fields marked with an * are required.</p>
        <p>your password must be at least 8 characters.</p>
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
            <Button type="submit">Sign Up</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
