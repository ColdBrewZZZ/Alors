import React, { useState, useEffect } from 'react';
import './Home.css';
import HeroSection from '../HeroSection';
import useFetch from '../../api/useFetch';

function Home() {


    const { data: imageUrl1 } = useFetch(
      'http://localhost:3000/category_images/apparel'
    );
    const { data: imageUrl2 } = useFetch(
      'http://localhost:3000/category_images/shoes'
    );
    const {data: imageUrl3 } = useFetch(
      'http://localhost:3000/category_images/gifts'
    );
    const {data: imageUrl4 } = useFetch(
      'http://localhost:3000/category_images/chez_moi'
    );
  


  return (
    <div>
      <HeroSection />
      <div className="explore-container">
        <div className="explore-text">Explore</div>
        <div className="container col-12">
          <div className="row">
           
             
            <div className="explore-img">
                <img src={imageUrl1?.photoUrl} alt="apparel"/>
                <div className="explore-txt">APPAREL</div>         
              </div>
              
      
         
              <div className="explore-img">
                <img src={imageUrl2?.photoUrl} alt="shoes" />
                <div className="explore-txt">SHOES</div> 
              </div>
         
          
              <div className="explore-img">
                <img src={imageUrl3?.photoUrl} alt="gifts" />
                <div className="explore-txt">GIFTS</div> 
              </div>
           
          
              <div className="explore-img">
                <img src={imageUrl4?.photoUrl} alt="chez moi" />
                <div className="explore-txt">CHEZ MOI</div> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
