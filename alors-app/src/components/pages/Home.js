import React, { useState, useEffect } from 'react';
import './Home.css';
import HeroSection from '../HeroSection';

function Home() {
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [imageUrl3, setImageUrl3] = useState('');
  const [imageUrl4, setImageUrl4] = useState('');
  

  useEffect(() => {
    fetch('http://localhost:3000/category_images/apparel')
      .then(response => response.json())
      .then(data => {
        setImageUrl1(data.photoUrl);
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/category_images/shoes')
      .then(response => response.json())
      .then(data => {
        setImageUrl2(data.photoUrl);
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/category_images/gifts')
      .then(response => response.json())
      .then(data => {
        setImageUrl3(data.photoUrl);
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/category_images/chez_moi')
      .then(response => response.json())
      .then(data => {
        setImageUrl4(data.photoUrl);
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
      });
  }, []);
 


  return (
    <div>
      <HeroSection />
      <div className="explore-container">
        <div className="explore-text">Explore</div>
        <div className="container col-12">
          <div className="row">
            {/* <div className="image url">
              {imageUrl && <img src={imageUrl} alt="shoes" />}
            </div> */}
             
            <div className="explore-img">
                <img src={imageUrl1} alt="apparel"/>
                <div className="explore-txt">APPAREL</div>         
              </div>
              
      
         
              <div className="explore-img">
                <img src={imageUrl2} alt="shoes" />
                <div className="explore-txt">SHOES</div> 
              </div>
         
          
              <div className="explore-img">
                <img src={imageUrl3} alt="gifts" />
                <div className="explore-txt">GIFTS</div> 
              </div>
           
          
              <div className="explore-img">
                <img src={imageUrl4} alt="chez moi" />
                <div className="explore-txt">CHEZ MOI</div> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
