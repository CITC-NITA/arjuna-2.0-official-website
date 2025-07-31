import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Deadlines from './components/Deadlines';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <CursorTrail />
      <Navbar />
      <Hero />
      <About />
      <Deadlines />
      <Problems />
      <Prizes />
      <Rules />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;