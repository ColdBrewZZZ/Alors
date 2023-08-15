import React, { useState } from 'react';
import { Dropdown, DropdownButton, Form, InputGroup, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
import { FaCity, FaInbox, FaLandmark, FaSmile, FaUser } from 'react-icons/fa';

const formFields = [
  {
    label: 'Username',
    icon: <FaUser />,
    type: 'text',
    name: 'username',
    defaultValue: '',
    placeholder: 'Enter Username',
    validation: (value) => value.length <= 2,
    message: 'Username should be at least 2 characters long'
  },
  {
    label: 'Email',
    icon: <FaInbox />,
    type: 'text',
    name: 'email',
    defaultValue: '',
    placeholder: 'Enter Email',
    validation: (value) => !emailRegex.test(value),
    message: 'Invalid email'
  },
  {
    label: 'Address',
    icon: <FaCity />,
    type: 'text',
    name: 'address',
    defaultValue: '',
    placeholder: 'Street, number, city, zip',
    validation: (value) => value.length <= 10,
    message: 'Address should be at least 10 characters long'
  }
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Ex10() {
  const [student, setStudent] = useState({
    username: '',
    email: '',
    address: '',
    course: '',
    gender: ''
  });

  const [invalid, setInvalid] = useState(["username","email","address"]);

  const FormInput = ({ label, icon, type, name, defaultValue, placeholder, onInputChange, message, invalid }) => {
    const handleBlur = (event) => {
      const { name, value } = event.target;
      onInputChange(name, value);
    };
    return (
      <Form.Group controlId={`form${name}`}>
        <Form.Label>{label}</Form.Label>
        <InputGroup>
          <InputGroup.Text>{icon}</InputGroup.Text>
          <Form.Control
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onBlur={handleBlur}
          />
        </InputGroup>
        {invalid && <div className="text-danger">{message}</div>}
      </Form.Group>
    );
  };
  
  const onInputChange = (name, value) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const field = formFields.find((field) => field.name === name);
    if (field && field.validation && field.validation(value)) {
      console.log(field.message);
      setInvalid({ invalid: [...this.state.invalid, `${name}`] }); 
    } else {
      setInvalid(removeNameFromInvalidArray(name));
    }
  };

  const removeNameFromInvalidArray = (name) => {
    console.log(`this is the name being passed to remove ${name}`)
    
    console.log(`this is the ${invalid} when return is being called`)
    
  }

  const findIfNameIsInInvalidArray = (name) => {
    console.log(invalid)
    
  }

  console.log(student);
  console.log(invalid)

  return (
    <>
      <div className="text-center">
        <h1>Student Details</h1>
        <h5>Hello Student! Please fill in your details</h5>
        <hr/>
      </div>
      <div className="container">
        {formFields.map((field) => (
          <FormInput
            label={field.label}
            icon={field.icon}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={student[field.name]}
            onInputChange={onInputChange}
            validation={field.validation}
            message={field.message}
            invalid={findIfNameIsInInvalidArray(field.name)}
          />
        ))}

                  
          <Form.Group>
          <Form.Label>Course</Form.Label>
          <InputGroup>
            <InputGroup.Text><FaLandmark/></InputGroup.Text>
            <DropdownButton 
              variant="primary col-6"
            >
              <Dropdown.Item onBlur={() => onInputChange("course", "Business")}>Business</Dropdown.Item>
              <Dropdown.Item onBlur={() => onInputChange("course", "Criminology")}>Criminology</Dropdown.Item>
              <Dropdown.Item onBlur={() => onInputChange("course", "Marketing")}>Marketing</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          </Form.Group>


          <Form.Group>
          <Form.Label>Gender</Form.Label>
          <InputGroup>
          <InputGroup.Text><FaSmile/></InputGroup.Text>
            <ToggleButtonGroup type="radio" name="gender">
              <ToggleButton onBlur={() => onInputChange("gender", "F")} >
                Female
              </ToggleButton>
              <ToggleButton onBlur={() => onInputChange("gender", "M")} >
                Male
              </ToggleButton>
              <ToggleButton onBlur={() => onInputChange("gender", "O")} >
                Other
              </ToggleButton>
            </ToggleButtonGroup>
          </InputGroup>
          </Form.Group>




        <Button>Submit</Button>
      </div>
    </>
  );
}



export default Ex10;




