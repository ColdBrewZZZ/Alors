import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Contact.css';

const formFields = [
  { icon: <FaUser />, name: 'name', placeholder: 'Enter Your First and Last Name (optional)' },
  { icon: <FaEnvelope />, name: 'email', placeholder: 'Enter Your Email (required)' },
  { name: 'messageTitle', placeholder: 'Enter a Title For Your Message (required)' },
  { name: 'message', placeholder: 'Write your message here (required) and then click the send button. We will get back to you as soon as we can.' }   
];

const emailMessage = "Please enter your email so we can respond to your message.";
const titleMessage = "Please write a title for your message before pressing Send.";
const messageMessage = "Please enter a message so we know how to best assist you.";

function Contact() {
  const [info, setInfo] = useState({ name: '', email: '', messageTitle: '', message: ''});
  const [missingEmail, setmissingEmail] = useState(false);
  const [missingTitle, setmissingTitle] = useState(false);
  const [missingMessage, setmissingMessage] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <>
     <div className="text-center mt-4">
        <h1>HOW CAN WE HELP YOU?</h1>
        <hr />
      </div>
        <div className="container d-flex justify-content-center align-items-center" >
       
      <div className="text-center col-md-6" >
        <div >
          {/* First Field */}
          <div className="mb-3">
            <Form.Group controlId={`form${formFields[0].name}`}>
             
              <InputGroup>
                <InputGroup.Text>{formFields[0].icon}</InputGroup.Text>
                <Form.Control
                  type={formFields[0].name === 'text'}
                  name={formFields[0].name}
                  placeholder={formFields[0].placeholder}
                  value={info[formFields[0].name]}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form.Group>
          </div>

          {/* Second Field */}
          <div className="mb-3">
            <Form.Group controlId={`form${formFields[1].name}`}>
             
              <InputGroup>
                <InputGroup.Text>{formFields[1].icon}</InputGroup.Text>
                <Form.Control
                  type={formFields[1].name === 'text'}
                  name={formFields[1].name}
                  placeholder={formFields[1].placeholder}
                  value={info[formFields[1].name]}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form.Group>
          </div>
        </div>

        <div>
          {/* Third Field */}
   
        <Form.Group controlId={`form${formFields[2].name}`} >
            <InputGroup>
                <Form.Control
                   className="title-field"
                   type={formFields[2].name === 'text'}
                   name={formFields[2].name}
                   placeholder={formFields[2].placeholder}
                   value={info[formFields[2].name]}
                   onChange={handleInputChange} />
             </InputGroup>
        </Form.Group>

        {/* Fourth Field */}
     

                <Form.Control
                    className="message-field"
                    as="textarea"
                    name={formFields[3].name}
                    placeholder={formFields[3].placeholder}
                    value={info[formFields[3].name]}
                    onChange={handleInputChange}
                    style={{height: '200px' }}
                />
     
   


    
        </div>

        <div className="my-3">
          <Button>Send</Button>
        </div>
      </div>
        </div>
      
    </>
  );
}

export default Contact;