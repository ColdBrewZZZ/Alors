import React, {useState, useEffect} from 'react';
import '../App.css';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import alorsVideo from './videos/6222023.mp4';
import { Button } from './Button';

function HeroSection() {
    const [heroImage, setHeroImage] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/hero_section_images/1')
          .then(response => response.json())
          .then(data => {
            setHeroImage(data.photoPath);
          })
          .catch(error => {
            console.error('Error fetching image URL:', error);
          });
      }, []);

    return (
        <div className='hero-container'>
           <img className="hero-image" src={heroImage} alt="apparel"/>

            <h1>ALORS</h1>
            
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                buttonSize="btn--large">LOG IN</Button>
                 <Button className="btns" buttonStyle='btn--outline'
                buttonSize="btn--large">JOIN US</Button>
            </div>
        </div>
    )
}

export default HeroSection;

// <img src={heroImage} alt="apparel" width="100%"/>