import React from 'react';
import '../App.css';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import alorsVideo from './videos/6222023.mp4';
import { Button } from './Button';

function HeroSection() {

    return (
        <div className='hero-container'>
            <ReactPlayer
                url={alorsVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />

            <h1>ALORS</h1>
            
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                buttonSize="btn--large">SUMMER 2023</Button>
            </div>
        </div>
    )
}

export default HeroSection;