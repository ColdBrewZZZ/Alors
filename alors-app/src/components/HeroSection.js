import React, {useState, useEffect} from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import useFetch from '../api/useFetch';

function HeroSection() {
   

      
   const { data: heroImage } = useFetch(
     'http://localhost:3000/hero_section_images/1'
   );

 

    return (
        <div className='hero-container'>
           <img className="hero-image" src={heroImage?.photoPath} alt="apparel"/>

            <h1>ALORS</h1>
            
            <div className="hero-btns">
                <Button to="Account" className="btns" buttonStyle='btn--outline'
                buttonSize="btn--large">LOG IN</Button>
                 <Button to="Registration" className="btns" buttonStyle='btn--outline'
                buttonSize="btn--large" >JOIN US</Button>
            </div>
        </div>
    )
}

export default HeroSection;

// <img src={heroImage} alt="apparel" width="100%"/>