import React, { useState, useEffect } from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import CartItemCard from './ShoppingComponents/CartItemCard';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const userCart = JSON.parse(localStorage.getItem('user_cart')) || [];
  const url = "http://localhost:3000/items";

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
      console.log(cartItems)
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
        setCartItems(filteredCartItems);
      };
      fetchCartItems();
    }
  }, []);

  
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
              />
            ))}
          </div>
          <div className="col-sm">
            <div className='order-details border border-dark'>
              <h2>ORDER DETAILS</h2>
              <p>{cartItems.reduce((total, item) => total + item.quantity, 0)} items in cart</p>

              <p>order total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
              <Button>PROCEED TO CHECKOUT</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='m-2'>
        <Button>Back to Shopping</Button>
      </div>
    </>
  );
}

export default Cart;
