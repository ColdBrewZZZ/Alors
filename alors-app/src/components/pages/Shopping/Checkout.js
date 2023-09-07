import React from 'react';
import image from '../../../img/exploreAp.JPG';
import { Button } from 'react-bootstrap';

function Checkout() {
  

  return (
    <>
        <div>
            <h1 className="text-center">CHECKOUT</h1>
        </div>
   
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <h6>CONTACT INFORMATION</h6>
                <div className='item-details' >
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <img className="item-image" src={image} alt="Item" />
                                </div>
                                <div class="col-4">
                                    <p>Name of item</p>
                                    <p>desciption of item</p>
                                    <p>$900</p>
                                    <Button className="btn btn-light">remove</Button>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <p>Qty: 1</p>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                                    <Button className="btn btn-light col">+</Button>
                                                    <Button className="btn btn-dark col">-</Button>  
                                        </div>
                                    </div>      
                                </div>        
                            </div>  
                        </div> 
                </div>
                <div className='item-details' >
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <img className="item-image" src={image} alt="Item" />
                                </div>
                                <div class="col-4">
                                    <p>Name of item</p>
                                    <p>desciption of item</p>
                                    <p>$900</p>
                                    <Button className="btn btn-light">remove</Button>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <p>Qty: 3</p>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                                    <Button className="btn btn-light col">+</Button>
                                                    <Button className="btn btn-dark col">-</Button>  
                                        </div>
                                    </div>      
                                </div>        
                            </div>  
                        </div> 
                </div>
            </div>
            <div className="col-sm">
                <div className='order-details' >
                        <h2>ORDER DETAILS</h2>
                        <p>4 items in cart</p>
                        <p>order total: $3600</p>
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

export default Checkout;
