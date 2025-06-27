import React from 'react';
import logo from '../assets/logo.png';
import "../styles/navbar.css";



const Navbar = () => (
  <nav className="navbar">
    <img src={logo} height={100} width={300}/>
    

    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#domains">Domains</a></li>
      <li><a href="#deadlines">Deadlines</a></li>
      <li><a href="#problems">Problem Statements</a></li>
      <li><a href="#rules">Rules</a></li>
      <li><a href="#FAQ">FAQ</a></li>
      <li><a href="#FAQ">FAQ</a></li>

      
    </ul>
  </nav>
);

export default Navbar;
