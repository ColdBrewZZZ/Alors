import React, {useState, useEffect} from 'react';
import image from '../../../img/exploreAp.JPG';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Form, InputGroup} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from '../../../api/axios';

const contactInformationInputFields = [
    { name: 'email', type: 'email', label: 'Email', required: true, redStar:true },
    { name: 'phone', type: 'text', label: 'Phone number', required: true, redStar:true},
  ];


const shippingInformationInputFields = [
    { name: 'title', type: 'text', label: 'Title', required: false},
    { name: 'first_name', type: 'text', label: 'First Name', required: true, redStar:true},
    { name: 'last_name', type: 'text', label: 'Last Name', required: true, redStar:true},
    { name: 'street_address', type: 'text', label: 'Street Address', required: true, redStar:true},
    { name: 'apt', type: 'text', label: 'apt/floor/suite', required: false},
    { name: 'city', type: 'text', label: 'City', required: true, redStar:true},
    { name: 'state', type: 'text', label: 'State', required: true, redStar:true},
    { name: 'zip_code', type: 'text', label: 'Zip Code', required: true, redStar:true},
  ];

function Checkout() {
  
    const { register, handleSubmit, formState: { errors } } = useForm();

     
    const [user, setUser] = useState({ first_name: "user" });
    const navigate = useNavigate();


   
    useEffect(() => {
        axios
          .get('http://localhost:3000/users/get-cookie', { withCredentials: true })
          .then((response) => {
            const id = response.data.userID;
            if (id == undefined){
                navigate('/Account');
            }
            axios.post('http://localhost:3000/users/user', { id })
              .then((response) => {
                setUser(response.data[0]);
              })
              .catch((error) => {
                console.error('error fetching user data:', error);
              });
          })
          .catch((error) => {
            console.error('Error fetching id:', error);
            navigate('/Account');
          });
      }, []);

  return (
    <>
        <div>
            <h1 className="text-center">CHECKOUT</h1>
        </div>
   
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <h6>CONTACT INFORMATION</h6>
                    <div className=" text-center col-md-6 bg-white rounded pt-5 p-4 my-4 border border-black">
                        <Form>
                            {contactInformationInputFields.map((field) => (
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
                            
                        </Form>
                    </div>

                {/* email, phone, */}

                <h6>SHIPPING INFORMATION</h6>
                {/* title, first name, last name, street address, apt/floor/suite, city, state, zip */}
                <div className=" text-center col-md-6 bg-white rounded pt-5 p-4 my-4 border border-black">
                        <Form>
                            {shippingInformationInputFields.map((field) => (
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
                            
                        </Form>
                    </div>
               
            </div>
            <div className="col-sm">
            <div className='item-details' >
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <img className="item-image" src={image} alt="Item" />
                                </div>
                                <div class="col-4">
                                    <p>Name of item</p>
                                    <p>$900</p>
                                    <Button className="btn btn-light">remove</Button>
                                </div>
                                     
                            </div>  
                        </div> 
                </div>
                <div className='order-details' >
                        <h2>ORDER DETAILS</h2>
                        <p>4 items in cart</p>
                        <p>order total: $3600</p>
                        <Button>SUBMIT ORDER</Button> 
               
                
                </div>
            
            </div>
        </div>
    </div>
    <div className='m-2'>
        <Link to={`/Cart`}>
            <Button>Back to cart</Button>
        </Link>
    </div>
    
   
    </>
    
  );
}

export default Checkout;
