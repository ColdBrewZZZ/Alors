import React, { useState, useEffect } from 'react';
import './Home.css';
import HeroSection from './WelcomeSection';
import useFetchImage from '../../../api/useFetchImage';
import { Link } from 'react-router-dom';

function Home() {


    const { data: imageUrl1 } = useFetchImage(
      'http://localhost:3000/category_images/apparel'
    );
    const { data: imageUrl2 } = useFetchImage(
      'http://localhost:3000/category_images/shoes'
    );
    const {data: imageUrl3 } = useFetchImage(
      'http://localhost:3000/category_images/gifts'
    );
    const {data: imageUrl4 } = useFetchImage(
      'http://localhost:3000/category_images/chez_moi'
    );
  


  return (
    <div>
      <HeroSection />
      <div className="explore-container">
        <div className="explore-text">Explore Categories</div>
        <div className="container col-12">
          <div className="row">
           
            
            <div className="explore-img">
                <Link  to={`/Shopping/category1`}>
                    <img src={imageUrl1?.photoUrl} alt="apparel"/>
                    <div className="explore-txt">APPAREL</div>    
                </Link>  
                <div className="explore-txt">APPAREL</div> 
              </div>
              
      
         
              <div className="explore-img">
                <Link  to={`/Shopping/category2`}>
                  <img src={imageUrl2?.photoUrl} alt="shoes" />
                  
                </Link>
                <div className="explore-txt">SHOES</div> 
              </div>
         
          
              <div className="explore-img">
                <Link  to={`/Shopping/category3`}>
                  <img src={imageUrl3?.photoUrl} alt="gifts" />
                  
                </Link>
                <div className="explore-txt">GIFTS</div> 
              </div>
           
          
              <div className="explore-img">
                <Link  to={`/Shopping/category4`}>
                  <img src={imageUrl4?.photoUrl} alt="chez moi" />
                
                </Link>
                <div className="explore-txt">CHEZ MOI</div> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;