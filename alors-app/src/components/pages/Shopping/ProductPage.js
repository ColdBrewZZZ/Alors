import React from 'react';
import image from '../../../img/exploreAp.JPG';
import './ProductPage.css';
import { Button } from 'react-bootstrap';

function ProductPage() {
  

  return (
    <>
    <div className="container">
      <div className="categories">
        <p>Categories starting with parent</p>
      </div>
      <div className="row">
        <div className="col-sm">
            <div className="image">
            <img
                src={image}
                alt="Sample"
                style={{ width: '100%' }}
            />
            </div>
        </div>
        <div className="col-sm">
            <div className='item-details' >
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <h1>NAME OF ITEM</h1>
                                    <h3>Description of item</h3>
                                </div>
                                <div class="col-4">
                                    <Button className="btn btn-light">Add to wish list</Button>
                                </div>
                                
                            </div>
                            <div>
                             <h3>$900</h3>
                            </div>
                           
                            <div class="row">
                                <div class="col">
                                    <Button>Add to Cart</Button>
                                </div>
                                <div class="col">
                                    <p>Only 34 left in stock</p>
                                </div>
                                
                            </div>
                            
                       
                         </div>
               
                
            </div>
            
        </div>
        
       
      </div>
    </div>
   
    </>
    
  );
}

export default ProductPage;
