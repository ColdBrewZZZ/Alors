import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { sendEmail } from '../../../api/api';

const fieldConfigurations = [
  { name: 'email', type: 'email', label: 'Email', required: true },
];


function ResetRequest() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  

  const onSubmit = async (formData) => {
    const { email } = formData;
 
    try {
      const sendEmailResponse = await sendEmail(email);

     
        navigate('/Account');
        //an alert saying that the email was sent 
      
    } catch (sendEmailError) {
      console.error(sendEmailError);
    }
   

  };
  
  return (
    <>
    <div className="text-center mt-4">
      <h1>REQUEST A PASSWORD RESET LINK</h1>
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
          <Button type="submit">Send Email</Button>
        </Form>
        <div className='py-4 text-left'>
          <div className="mb-2">Don't have an account yet?</div>
          <Link to="/Registration">make a new account</Link>
        </div>
      
      </div>
    </div>
  </>
  );
}

export default ResetRequest;
