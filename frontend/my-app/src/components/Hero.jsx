import React from 'react';
import heroBg from '../assets/hero-bg.webp';

const Hero = () => (
  <header className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
    <div className="overlay">
      <h1>ARJUNA 2.0</h1>
      <p>Hackathon by Civil Innovation & Technology Cell, NIT Agartala</p>
      <a href="#rules" className="btn">Apply Now</a>
      <a href="/brochure.pdf" className="btn outline">Download Brochure</a>
    </div>
  </header>
);

export default Hero;