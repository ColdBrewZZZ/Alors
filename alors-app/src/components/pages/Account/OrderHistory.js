import React, { useEffect, useState } from 'react';
import image from '../../../img/exploreAp.JPG';
import './OrderHistory.css';
import { Button } from 'react-bootstrap';
import axios from '../../../api/axios';
import OrderHistoryItemCard from './components/OrderHistoryItemCard';

 

function OrderHistory() {
   
    const [user, setUser] = useState({ first_name: "You!" });
    const [orderHistoryItems, setOrderHistoryItems] = useState();
    const [cardItems, setCardItems] = useState([]);


    const getUser = () => {
        axios.get('http://localhost:3000/users/user', { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
                .then((response) => { setUser(response.data[0]); }) 
                .catch((error) => {
                    console.error('error fetching user data:', error);
                });
    }

    const getUserOrderHistoryDetails = () => {
        axios.get('http://localhost:3000/order_history', { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
        .then((response) => {
            setOrderHistoryItems(response.data);
            
        }) 
        .catch((error) => {
            console.error('error fetching user data:', error);
        });
    }
   
    useEffect(async () => {
        await getUser();
        await getUserOrderHistoryDetails();
    
        
    }, []);

    useEffect( () => {
        if (orderHistoryItems && orderHistoryItems.length > 0) {
            const fetchCartItems = async () => {
              const updatedCartItems = await Promise.all(
                orderHistoryItems.map(item => fetchItem(item.item_id, item.quantity))
              );
              const filteredCartItems = updatedCartItems.filter(item => item !== null);
              setCardItems(filteredCartItems);
            };
            fetchCartItems();
          }

    }, [orderHistoryItems]);
    

      const fetchItem = async (id, quantity) => {
        try {
          const response = await fetch(`http://localhost:3000/items/${id}`);
          const data = await response.json();
          const cartItem = {
            id: id,
            image: data.photo_path,
            name: data.name,
            price: data.price,
            quantity: quantity
          };
          console.log(cartItem)
          return cartItem;
        } catch (error) {
          console.error('Error fetching items:', error);
          return null;
        }
      };
     

  return (
    <>
        <div>
            <h1 className="text-center" >Hello {user.first_name} </h1>
            <hr/>
            <h1 className="text-center">YOUR ORDER HISTORY</h1>
        </div>
      
        <div className="container d-flex">
        
            {/* <div class="col-6">
                <Button className="btn">go to wish list</Button>
            </div>   */}
        
        </div>
    
        <div className="container">
            
            {cardItems.map((item) => (
                
            <OrderHistoryItemCard
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
            />
            ))}
        </div>
                
        

        
        
   
    </>
    
  );
}

export default OrderHistory;
