import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Deadlines from './components/Deadlines';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Deadlines />
      <Rules />
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;