import React from 'react';
import './Shopping.css';
import { Button } from 'react-bootstrap';
import banner from '../../img/bannerAp.JPG';
import image from '../../img/exploreAp.JPG';


function Shopping() {
  

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
          <option value="price-range">Price Range</option>
          <option value="color">Color</option>
          <option value="category">Category</option>
        </select>
        <select defaultValue="sort">
          <option value="sort" disabled>Sort</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>
      <div class="container mt-2">
            <div class="row">
                <div class="col-sm">
                    <div class="item-card">
                        <img
                                src={image}
                                alt='image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">Item Title</h2>
                            <p className="item-price">$900</p>
                            <Button>Add to Cart</Button>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="item-card">
                        <img
                                src={image}
                                alt='image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">Item Title</h2>
                            <p className="item-price">$900</p>
                            <Button>Add to Cart</Button>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="item-card">
                        <img
                                src={image}
                                alt='image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">Item Title</h2>
                            <p className="item-price">$900</p>
                            <Button>Add to Cart</Button>
                    </div>
                </div>
                
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="item-card">
                        <img
                                src={image}
                                alt='image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">Item Title</h2>
                            <p className="item-price">$900</p>
                            <Button>Add to Cart</Button>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="item-card">
                        <img
                                src={image}
                                alt='image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">Item Title</h2>
                            <p className="item-price">$900</p>
                            <Button>Add to Cart</Button>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="item-card">
                        <img
                                src={image}
                                alt='image'
                                style={{ width: '100%'}}
                                />
                            <h2 className="item-title">Item Title</h2>
                            <p className="item-price">$900</p>
                            <Button>Add to Cart</Button>
                    </div>
                </div>
                
            </div>
           
</div>
     
      <div className="more-Button mb-2 mx-2">
        <Button >More</Button>
      </div>
      
   
    </>
    
  );
}

export default Shopping;
