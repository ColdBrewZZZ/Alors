import React, { useEffect, useState } from 'react';
import './Shopping.css';
import { Button } from 'react-bootstrap';
import { Link, useParams  } from 'react-router-dom';
import banner from '../../../img/bannerAp.JPG';
import ItemCard from './ShoppingComponents/ItemCard';



function Shopping() {
  const [items, setItems] = useState([]);
  const {category} = useParams();
  const [lastPressedButton, setLastPressedButton] = useState(null);
  
  


  console.log(category)

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
    fetchItems(`http://localhost:3000/items/${category}`);
  
  }, [category]);
 
  return (  
    <>
    <nav className="shopping-navbar">
        <div className="shopping-nav-links">
          <Link to="http://localhost:3001/Shopping/All">
            <Button className={`btn btn-dark ${lastPressedButton === 'SHOP ALL' ? 'active' : ''}`}
              onClick={() => {
                setLastPressedButton('SHOP ALL');
              }}> All
            </Button>
          </Link>
          <Link to="http://localhost:3001/Shopping/new-items">
          <Button className={`btn btn-dark ${lastPressedButton === 'NEW' ? 'active' : ''}`}
              onClick={() => {
                setLastPressedButton('NEW');
              }}> New
            </Button>
          </Link>
          <Link to="http://localhost:3001/Shopping/category1">
          <Button className={`btn btn-dark ${lastPressedButton === 'APPAREL' ? 'active' : ''}`}
              onClick={() => {
                setLastPressedButton('APPAREL');
              }}> Apparel
            </Button>
          </Link>
          <Link to="http://localhost:3001/Shopping/category2">
          <Button className={`btn btn-dark ${lastPressedButton === 'SHOES' ? 'active' : ''}`}
              onClick={() => {
                setLastPressedButton('SHOES');
              }}> Shoes
            </Button>
          </Link>
          <Link to="http://localhost:3001/Shopping/category3">
          <Button className={`btn btn-dark ${lastPressedButton === 'GIFTS' ? 'active' : ''}`}
              onClick={() => {
                setLastPressedButton('GIFTS');
              }}> Gifts
            </Button>
          </Link>
          <Link to="http://localhost:3001/Shopping/category4">
          <Button className={`btn btn-dark ${lastPressedButton === 'CHEZ MOI' ? 'active' : ''}`}
              onClick={() => {
                setLastPressedButton('CHEZ MOI');
              }}> Chez Moi
            </Button>
          </Link>
           
            
        </div>
      </nav>
     
      <div className='banner-container'>
      <img
        src={banner}
        alt="Banner"
        style={{ width: '100%'}}
      />

            <h1>{lastPressedButton}</h1>
            
            
        </div>
      {/* <div className="dropdowns mt-2">
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
      </div> */}
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


