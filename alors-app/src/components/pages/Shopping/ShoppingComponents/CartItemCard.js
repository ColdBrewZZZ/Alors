import React from 'react';
import { Link } from 'react-router-dom';
import '../Cart.css';
import { Button } from 'react-bootstrap';

function CartItemCard(props) {
    const handleRemoveClick = () => {
        if (props.onRemove) {
          props.onRemove();
        }
      };

  return (
    <div className='item-details border border-dark' >
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img className="item-image" src={props.image} alt="Item" />
                    </div>
                    <div class="col-4">
                        <p>{props.name}</p>
                        <p>{props.description}</p>
                        <p>${props.price}</p>
                        <Button className="btn btn-light border border-dark" onClick={handleRemoveClick}>
                            remove
                        </Button>
                    </div>
                    <div class="col-4">
                        <div>
                            <p>{props.quantity}</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                        <Button className="qty-btn btn-light border border-dark col">+</Button>
                                        <Button className="qty-btn btn-dark col">-</Button>  
                            </div>
                        </div>      
                    </div>        
                </div>  
            </div> 
    </div>
  );
}

export default CartItemCard;

