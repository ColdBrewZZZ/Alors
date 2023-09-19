import React, {useState, useEffect} from 'react';
import image from '../../../img/exploreAp.JPG';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Form, InputGroup} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from '../../../api/axios';
import CheckoutItemCard from './ShoppingComponents/CheckoutItemCard';

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
    const [user, setUser] = useState();
    const [userCartItems, setUserCartItems] = useState([]);
    const [checkoutItems, setCheckoutItems] = useState([]);

    const navigate = useNavigate();

   
  useEffect(() => {
    // Fetch user data
    axios.get('http://localhost:3000/users/get-cookie', { withCredentials: true })
      .then((response) => {
        const id = response.data.userID;
        if (id === undefined) {
          navigate('/Account');
        } else {
          // Fetch user information
          axios.post('http://localhost:3000/users/user', { id })
            .then((userResponse) => {
              setUser(userResponse.data[0]);

              // Fetch user cart data
              axios.get(`http://localhost:3000/user_cart/${id}`)
                .then((cartResponse) => {
                  setUserCartItems(cartResponse.data);

                  // Fetch item details for each item in userCartItems
                  const itemPromises = cartResponse.data.map((item) =>
                    axios.get(`http://localhost:3000/items/${item.item_id}`)
                  );

                  Promise.all(itemPromises)
                    .then((itemResponses) => {
                      const checkoutItemsData = [];
                      itemResponses.forEach((response, index) => {
                        const itemData = response.data;
                        const cartItem = cartResponse.data[index];
                        const existingCheckoutItemIndex = checkoutItemsData.findIndex(
                          (checkoutItem) => checkoutItem.id === itemData.id
                        );

                        if (existingCheckoutItemIndex !== -1) {

                          checkoutItemsData[existingCheckoutItemIndex].quantity += cartItem.quantity;
                        } else {
    
                          checkoutItemsData.push({
                            id: itemData.id,
                            photo_path: itemData.photo_path,
                            name: itemData.name,
                            price: itemData.price,
                            quantity: cartItem.quantity,
                          });
                        }
                      });
                      setCheckoutItems(checkoutItemsData);
                      console.log('checkoutItems:', checkoutItemsData);
                    })
                    .catch((error) => {
                      console.error('Error fetching item details:', error);
                    });
                })
                .catch((error) => {
                  console.error('Error fetching user cart data:', error);
                });
            })
            .catch((error) => {
              console.error('Error fetching user data:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error fetching id:', error);
        navigate('/Account');
      });
  }, [navigate]);

  const handleRemoveItem = (itemId) => {
    axios.get(`http://localhost:3000/user_cart/remove/${itemId}`)
      .then((response) => {
        setUserCartItems(prevUserCartItems => prevUserCartItems.filter(item => item.id !== itemId));
  
        // Remove the item from checkoutItems
        setCheckoutItems(prevCheckoutItems =>
          prevCheckoutItems.filter(item => item.id !== itemId)
        );
  
        // Remove the item from user_cart in local storage
        const userCartLocalStorage = JSON.parse(localStorage.getItem('user_cart')) || [];
        const updatedUserCart = userCartLocalStorage.filter(item => item.item_id !== itemId);
        localStorage.setItem('user_cart', JSON.stringify(updatedUserCart));
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  };

      useEffect(() => {
      }, [checkoutItems]);

  return (
    <>
        <div>
            <h1 className="text-center">CHECKOUT</h1>
        </div>
   
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <h6>CONTACT INFORMATION</h6>
                    <div className=" text-center col-sm bg-white rounded pt-5 p-4 my-4 border border-black">
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
                <div className=" text-center col-sm bg-white rounded pt-5 p-4 my-4 border border-black">
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
               
                    {checkoutItems.map((item) => (
                            <CheckoutItemCard
                                id={item.id}
                                image={item.photo_path}
                                name={item.name}
                                price={item.price}
                                quantity ={item.quantity}
                                onRemoveItem={handleRemoveItem}
                            />
                            ))}
            </div>
            <div className="col-sm">
            <div className='order-details' >
                        <h2>ORDER DETAILS</h2>
                        <p>{checkoutItems.reduce((total, item) => total + item.quantity, 0)} items</p>
                        <p>order total: ${checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                        <Link to={`/Receipt`}>
                            <Button>SUBMIT ORDER</Button>
                        </Link>
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