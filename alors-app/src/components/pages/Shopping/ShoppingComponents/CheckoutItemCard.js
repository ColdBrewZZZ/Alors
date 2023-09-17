import React from 'react';
import { Link } from 'react-router-dom';
import '../Cart.css';
import { Button } from 'react-bootstrap';


function CheckoutItemCard(props) {
    
  return (
    <div className='item-details' >
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <img className="item-image" src={props.image} alt="Item" />
                            </div>
                            <div class="col-4">
                                <p>{props.name}</p>
                                <p>${props.price}</p>
                                <p>Qty: {props.quantity}</p>
                                <Button className="btn btn-light">remove</Button>
                            </div>
                                    
                        </div>  
                    </div> 
                </div>
  );
}

export default CheckoutItemCard;

