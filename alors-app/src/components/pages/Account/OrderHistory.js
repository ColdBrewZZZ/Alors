import React from 'react';
import image from '../../../img/exploreAp.JPG';
import './OrderHistory.css';
import { Button } from 'react-bootstrap';

function OrderHistory() {
  

  return (
    <>
        <div>
            <h1 className="text-center">ORDER HISTORY</h1>
        </div>
        <div className="container d-flex">
        
            <div class="col-6">
                <Button className="btn">go to wish list</Button>
            </div>  
        
        </div>
    
        <div className="container">
            <div className='item-details' >
                <div class="container d-flex">
                    <div class="row">
                        <div className="col">
                            <div class="row d-flex">
                                <div class="col">
                                <img className="item-image" src={image} alt="Item" />
                                </div>
                                <div class="col">
                                <img className="item-image" src={image} alt="Item" />
                                </div>

                            </div>  
                            <div className="row mt-3">
                                <p>Name of item (qty) price, Name of item (qty) price</p>
                                <p>total: $$$$</p>
                                <p>order placed: date</p>     
                            </div>    
                        </div>     
                        <div class="col">
                            <Button className="btn col">see order details and options</Button>
                        </div>    
                    </div>             
                </div> 
            </div>
            <div className='item-details' >
                <div class="container d-flex">
                    <div class="row">
                        <div className="col">
                            <div class="row d-flex">
                                <div class="col">
                                <img className="item-image" src={image} alt="Item" />
                                </div>
                                
                            </div>  
                            <div className="row mt-3">
                                <p>Name of item (qty) price, Name of item (qty) price</p>
                                <p>total: $$$$</p>
                                <p>order placed: date</p>     
                            </div>    
                        </div>     
                        <div class="col">
                            <Button className="btn col">see order details and options</Button>
                        </div>    
                    </div>             
                </div> 
            </div>
        </div>
                
        

        
        
   
    </>
    
  );
}

export default OrderHistory;
