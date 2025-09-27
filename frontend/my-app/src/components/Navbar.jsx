import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#deadlines">Deadlines</a></li>
        <li><a href="#problems">Problem Statements</a></li>
        <li><a href="#prizes">Prizes</a></li>
        <li><a href="#rules">Rules</a></li>
        <li><a href="#FAQ">FAQ</a></li>
        <li><a href="#FAQ" id='nav-links-last'>FAQ</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;
