import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderImg from './components/HeaderImg';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Deadlines from './components/Deadlines';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import Form from './components/Form';
import './App.css';


function App() {
  return (
    <div className="main-container">
      <CursorTrail />

      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                
                <Hero />
                <About />
                <Deadlines />
                <Problems />
                <Prizes />
                <Rules />
                <FAQ />
                <Footer />
              </>
            }
          />

          
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
