import React from 'react'
import '../OrderHistory.css';
import { Button } from 'react-bootstrap';


function OrderHistoryItemCard(props) {
  return (
    <div className='item-details' >
                <div class="container d-flex">
                    <div class="row">
                        <div className="col">
                            <div class="row d-flex">
                                <div class="col">
                                <img className="item-image" src={props.image} alt="Item" />
                                </div>
                                
                            </div>  
                            <div className="row mt-3">
                                <p>{props.name}, Qty: {props.quantity}, ${props.price}</p>
                                <p>total: {props.quantity*props.price}</p>
                                {/* <p>order placed: date</p>      */}
                            </div>    
                        </div>     
                        <div class="col">
                            <Button className="btn col">see order details and options</Button>
                        </div>    
                    </div>             
                </div> 
            </div>
  );
}

export default OrderHistoryItemCard;

