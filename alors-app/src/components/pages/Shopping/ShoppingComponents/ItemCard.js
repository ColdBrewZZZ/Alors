import React from 'react';
import { Link } from 'react-router-dom';
import '../Shopping.css';
import { Button } from 'react-bootstrap';

function ItemCard(props) {
  const handleAddToCart = (e) => {
    e.preventDefault();
   
    const userCart = JSON.parse(localStorage.getItem('user_cart')) || [];

    const existingItem = userCart.find((item) => item.item_id === props.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { item_id: props.id, quantity: 1 };
      userCart.push(newItem);
    }

    localStorage.setItem('user_cart', JSON.stringify(userCart));
  };

  return (
    <div className="col-sm-4">
      <Link className="itemCardLink" to={`/ProductPage/${props.id}`}>
        <div className="item-card">
          <img
            src={props.image}
            alt='item image'
            style={{ width: '100%' }}
          />
          <h2 className="item-title">{props.name}</h2>
          <p className="item-price">${props.price}</p>
          <Button className="mb-3" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
