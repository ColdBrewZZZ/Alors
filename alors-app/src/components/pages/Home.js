import React from 'react';
import './Home.css';

import Footer from '../Footer';
import apparel from '../../img/exploreAp.JPG';
import accessories from '../../img/exploreAc.JPG';
import gifts from '../../img/exploreG.JPG';
import chezMoi from '../../img/exploreCh.JPG';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="explore-container">
        <div className="explore-text">Explore</div>
        <div className="container col-12">
          <div className="row">
          
              <div className="explore-img">
                <img src={apparel} alt="apparel"/>
                <div className="explore-txt">APPAREL</div>         
              </div>
              
      
         
              <div className="explore-img">
                <img src={accessories} alt="shoes" />
                <div className="explore-txt">SHOES</div> 
              </div>
         
          
              <div className="explore-img">
                <img src={gifts} alt="gifts" />
                <div className="explore-txt">GIFTS</div> 
              </div>
           
          
              <div className="explore-img">
                <img src={chezMoi} alt="chez moi" />
                <div className="explore-txt">CHEZ MOI</div> 
              </div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
