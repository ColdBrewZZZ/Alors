import React, { useEffect, useState } from 'react';
import './Shopping.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../img/bannerAp.JPG';
import ItemCard from './ShoppingComponents/ItemCard';


function Shopping() {
  const [items, setItems] = useState([]);

  

  const url = "http://localhost:3000/items";

  const fetchItems = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setItems(data)  
      return data.results;
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchItems(url);
    console.log(items);
  }, []);

  return (
    <>
    <nav className="shopping-navbar">
        <div className="shopping-nav-links">
            <Button class="btn btn-dark">New</Button>
            <Button class="btn btn-dark">Apparel</Button>
            <Button class="btn btn-dark">Shoes</Button>
            <Button class="btn btn-dark">Gifts</Button>
            <Button class="btn btn-dark">Chez Moi</Button>
        </div>
      </nav>
     
      <div className='banner-container'>
      <img
        src={banner}
        alt="Banner"
        style={{ width: '100%'}}
      />

            <h1>NEW</h1>
            
            
        </div>
      <div className="dropdowns mt-2">
        <select defaultValue="filter">
          <option value="filter" disabled>Filter</option>
          <option value="color">Color</option>
          <option value="category">Country of Origin</option>
        </select>
        <select defaultValue="sort">
          <option value="sort" disabled>Sort</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>
      <div class="container mt-2">
            <div class="row">
              {items.map((item) => (
                <ItemCard
                  
                  id={item.id}
                  image={item.photo_path}
                  name={item.name}
                  price={item.price}
                 
                  
                />
              ))}
                
                
            </div>
           
</div>
     
      <div className="more-Button mb-2 mx-2">
        <Button class="btn btn-light">More</Button>
      </div>
      
   
    </>
    
  );
}

export default Shopping;
