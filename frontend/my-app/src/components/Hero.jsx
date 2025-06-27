import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import "../styles/hero.css";
import brochure from "../assets/brochure-pdf.pdf";

const Hero = () => (
  <header className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
    <div className="overlay">
      <h1>Civil Innovation & Technology Cell, NIT Agartala</h1>
      <p>Presents</p>
      <h1>ARJUNA 2.0</h1>
      
      <a href="#rules" className="btn">Apply Now</a>
      <a href={brochure} className="btn outline" target="_blank" rel="noopener noreferrer">Download Brochure</a>

    </div>
  </header>
);

export default Hero;