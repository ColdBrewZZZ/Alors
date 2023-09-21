import React, {useState, useEffect, useRef} from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Form, InputGroup} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from '../../../api/axios';
import CheckoutItemCard from './ShoppingComponents/CheckoutItemCard';
import useFetch from '../../../api/useFetch';


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
    const { isLoading, error, data, fetchData } = useFetch();
    const [user, setUser] = useState();
    const [userCartItems, setUserCartItems] = useState([]);
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [addressId, setAddressId] = useState([]);
   
   
    const userCart = JSON.parse(localStorage.getItem('user_cart')) || [];
    const url = "http://localhost:3000/items";

    const navigate = useNavigate();

    const fetchItem = async (url, id, itemCartQuantity) => {
      try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        const cartItem = {
          id: data.id,
          photo_path: data.photo_path,
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: itemCartQuantity
        };
        return cartItem;
      } catch (error) {
        console.error('Error fetching items:', error);
        return null;
      }
    };
    
    useEffect(() => {
      if (userCart && userCart.length > 0) {
        const fetchCartItems = async () => {
          const updatedCartItems = await Promise.all(
            userCart.map(item => fetchItem(url, item.item_id, item.quantity))
          );
          const filteredCartItems = updatedCartItems.filter(item => item !== null);
          setCheckoutItems(filteredCartItems);
        };
        fetchCartItems();
      }
    }, []);

    // handleRemoveItem lc version (identical to removeItemFromCart in Cart.js besides cartItems vs checkoutItems)
    const handleRemoveItem = (itemId) => {
      const updatedUserCart = userCart.filter((item) => item.item_id !== itemId);
      localStorage.setItem('user_cart', JSON.stringify(updatedUserCart));
      const updatedCartItems = checkoutItems.filter((item) => item.id !== itemId);
      setCheckoutItems(updatedCartItems);
    };
    
   
  // useEffect(() => {
  //   // Fetch user data
  //   axios.get('http://localhost:3000/users/get-cookie', { withCredentials: true })
  //     .then((response) => {
  //       const id = response.data.userID;
  //       if (id === undefined) {
  //         navigate('/Account');
  //       } else {
  //         // Fetch user information
  //         axios.post('http://localhost:3000/users/user', { id })
  //           .then((userResponse) => {
  //             setUser(userResponse.data[0]);

  //             // Fetch user cart data
  //             axios.get(`http://localhost:3000/user_cart/${id}`)
  //               .then((cartResponse) => {
  //                 setUserCartItems(cartResponse.data);

  //                 // Fetch item details for each item in userCartItems
  //                 const itemPromises = cartResponse.data.map((item) =>
  //                   axios.get(`http://localhost:3000/items/${item.item_id}`)
  //                 );

  //                 Promise.all(itemPromises)
  //                   .then((itemResponses) => {
  //                     const checkoutItemsData = [];
  //                     itemResponses.forEach((response, index) => {
  //                       const itemData = response.data;
  //                       const cartItem = cartResponse.data[index];
  //                       const existingCheckoutItemIndex = checkoutItemsData.findIndex(
  //                         (checkoutItem) => checkoutItem.id === itemData.id
  //                       );

  //                       if (existingCheckoutItemIndex !== -1) {

  //                         checkoutItemsData[existingCheckoutItemIndex].quantity += cartItem.quantity;
  //                       } else {
    
  //                         checkoutItemsData.push({
  //                           id: itemData.id,
  //                           photo_path: itemData.photo_path,
  //                           name: itemData.name,
  //                           price: itemData.price,
  //                           quantity: cartItem.quantity,
  //                         });
  //                       }
  //                     });
  //                     setCheckoutItems(checkoutItemsData);
                     
  //                   })
  //                   .catch((error) => {
  //                     console.error('Error fetching item details:', error);
  //                   });
  //               })
  //               .catch((error) => {
  //                 console.error('Error fetching user cart data:', error);
  //               });
  //           })
  //           .catch((error) => {
  //             console.error('Error fetching user data:', error);
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching id:', error);
  //       navigate('/Account');
  //     });
  // }, [navigate]);

  // const handleRemoveItem = (itemId) => {
  //   axios.get(`http://localhost:3000/user_cart/remove/${itemId}`)
  //     .then((response) => {
  //       setUserCartItems(prevUserCartItems => prevUserCartItems.filter(item => item.id !== itemId));
  
       
  //       setCheckoutItems(prevCheckoutItems =>
  //         prevCheckoutItems.filter(item => item.id !== itemId)
  //       );
  
       
  //       const userCartLocalStorage = JSON.parse(localStorage.getItem('user_cart')) || [];
  //       const updatedUserCart = userCartLocalStorage.filter(item => item.item_id !== itemId);
  //       localStorage.setItem('user_cart', JSON.stringify(updatedUserCart));
  //     })
  //     .catch((error) => {
  //       console.error('Error removing item from cart:', error);
  //     });
  // };

  //     useEffect(() => {
  //     }, [checkoutItems]);



    // add shipping info to address db 

    const addShippingInformationToAddressTable = (data) => {
     

      axios.post('http://localhost:3000/checkout', {
        title: data.title,
        first_name: data.first_name,
        last_name: data.last_name,
        street_address: data.street_address,
        apt: data.apt,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
        order_status: "pending",
        phone: data.phone,
        items: checkoutItems
        
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });


      
    };
  


    // add userCart to orders db

    // const addUserCartItemsToOrdersTable = (checkoutItems) => {
    //   // user_id, date, order_status, phone, address_id

    //   // const response = fetchData('http://localhost:3000/orders', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json',
    //   //   },
    //   //   body: JSON.stringify({user_id: user.id, date: todays date, order_status: "pending", phone: data.phone, address_id: }),
    //   // });
       
    //   console.log('checkoutItems', checkoutItems) // item_id, quantity, price
    //   console.log('user') // user_id
    //   // date, phone, order_status, and address_id
    // }

    const onSubmit = (formData) => {
      addShippingInformationToAddressTable(formData); // this function adds shipping address, order, and order details to db
      //addUserCartItemsToOrdersTable(checkoutItems,user);
    };

  return (
    <>
        <div>
            <h1 className="text-center">CHECKOUT</h1>
        </div>
    
    <Form onSubmit={ handleSubmit(onSubmit)} >
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <h6>CONTACT INFORMATION</h6>
                    <div className=" text-center col-sm bg-white rounded pt-5 p-4 my-4 border border-black">
                        
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
                            
                      
                    </div>

                {/* email, phone, */}

                <h6>SHIPPING INFORMATION</h6>
                {/* title, first name, last name, street address, apt/floor/suite, city, state, zip */}
                <div className=" text-center col-sm bg-white rounded pt-5 p-4 my-4 border border-black">
                    
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
                            <Button type="submit" >SUBMIT ORDER</Button>
                        </Link>
                </div>
             
            </div>
        </div>
    </div>
    </Form>
    <div className='m-2'>
        <Link to={`/Cart`}>
            <Button>Back to cart</Button>
        </Link>
    </div>
    
   
    </>
    
  );
}

export default Checkout;