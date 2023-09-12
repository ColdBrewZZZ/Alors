import React from 'react';
import { Link } from 'react-router-dom';
import '../Shopping.css';
import { Button } from 'react-bootstrap';

function ItemCard(props) {

   
    
   
 
  return (
    <div class="col-sm-4">
                <Link className="itemCardLink" to={`/ProductPage/${props.id}`}>
                    <div class="item-card">
                        <img
                                src={props.image}
                                alt='item image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">{props.name}</h2>
                            <p className="item-price">${props.price}</p>
                            <Button className="mb-3">Add to Cart</Button>
                    </div>
                </Link>
                </div>
  );
}


export default ItemCard;


