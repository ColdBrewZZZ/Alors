import React, { useState, useEffect } from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItemCard from './ShoppingComponents/CartItemCard';
import axios from '../../../api/axios';
import useFetch from '../../../api/useFetch';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [userCart, setUserCart] = useState([]);
 
  const { data, isLoading, error, fetchData } = useFetch();
  const url = "http://localhost:3000/items";

  const [user, setUser] = useState({ first_name: "user" });
  const [id, setId] = useState();

  const getCookie = () => {
    axios
      .get('http://localhost:3000/users/get-cookie', { withCredentials: true })
      .then((response) => { 
       
        setId(response.data.userID);
       
        if (id == undefined) {
          setUserCart(JSON.parse(localStorage.getItem('user_cart')) || []);
        } else {
          axios.get(`http://localhost:3000/user_cart/${id}`)
          .then((cartResponse) => {
            setUserCart(cartResponse.data);
          }).catch((error) => {
            console.error('Error fetching user cart data:', error);
          });
        }
       
      })
      .catch((error) => {
        console.error('Error fetching id:', error);
      });

  }

  const getUserData = () => {
        axios.post('http://localhost:3000/users/user', { id })
        .then((response) => {

        setUser(response.data[0]);
    }) 
    .catch((error) => {
        console.error('error fetching user data:', error);
    });

  }


  useEffect(() => {
    const fetchData = async () => {
      await getCookie();
      await getUserData();
  
     
      
      
  
  
      if (userCart && userCart.length > 0) {
        await fetchCartItems();
      }
    };
  
    fetchData();
  }, [id]);

  useEffect(() => {
    fetchCartItems()
  }, [userCart]);
  



  const removeItemFromCart = (itemId) => {
    const updatedUserCart = userCart.filter((item) => item.item_id !== itemId);
    localStorage.setItem('user_cart', JSON.stringify(updatedUserCart));

    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            removeItemFromCart(itemId);
            return null;
        }
      }
      return item;
    });
    const filteredCartItems = updatedCartItems.filter((item) => item !== null);
    setCartItems(filteredCartItems);
  };



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

  const fetchCartItems = async () => {
    const updatedCartItems = await Promise.all(
      userCart.map(item => fetchItem(url, item.item_id, item.quantity))
    );
    const filteredCartItems = updatedCartItems.filter(item => item !== null);
    setCartItems(filteredCartItems);
  };

  const addUserCartItemsToDb = async (userCart) => {
    for (const item of userCart) {
      const { item_id, quantity } = item;
      try {
        const response = await axios.get('http://localhost:3000/users/get-cookie', { withCredentials: true });
        const userId = response.data.userID;
       

        try {
          const response = await fetchData('http://localhost:3000/user_cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, item_id, quantity }),
          });

       
        } catch (postError) {
          console.error('Error adding item to user_cart:', postError);
        }
      } catch (error) {
        console.error('Error fetching id:', error);
      }
    }
  }

  
  return (
    <>
      <div>
        <h1 className="text-center">YOUR SHOPPING CART</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2>YOUR ITEMS</h2>
            {cartItems.map((item) => (
              <CartItemCard

                id={item.id}
                image={item.photo_path}
                name={item.name}
                description={item.description} 
                price={item.price}
                quantity={item.quantity}
                onRemove={() => removeItemFromCart(item.id)}
                onIncrement={() => incrementQuantity(item.id)} 
                onDecrement={() => decrementQuantity(item.id)}
              />
            ))}
          </div>
          <div className="col-sm">
            <div className='order-details border border-dark'>
              <h2>ORDER DETAILS</h2>
              <p>{cartItems.reduce((total, item) => total + item.quantity, 0)} items in cart</p>

              <p>order total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              <Link to={`/Checkout`} onClick={() => addUserCartItemsToDb(userCart)}>
                <Button>PROCEED TO CHECKOUT</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='m-2'>
      <Link to={`/Shopping`}>
        <Button>Back to Shopping</Button>
      </Link>
      </div>
    </>
  );
}

export default Cart;