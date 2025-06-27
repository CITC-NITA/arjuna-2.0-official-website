import React from 'react';
import "../styles/problems.css";
import bg from "../assets/about-bg.jpg";
import { useEffect, useRef, useState } from 'react';
const problemStatements = [
  "AI-BASED SMART FOOD WASTE MANAGEMENT",
  "SMART DRAINAGE AND FLOOD PREVENTION SYSTEM",
  "CARBON FOOTPRINT TRACKER FOR INDIVIDUALS",
  "SMART ENERGY RECOVERY SYSTEM FOR INDUSTRIAL EXHAUST AND WASTE HEAT",
  "Disaster Prediction and Real-Time Alert System Using Satellite Data."
];

const Problems = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id="problems" className={`problems-section ${isVisible ? 'visible' : ''}`} ref={ref} style={{backgroundImage:`url(${bg})`}}> 
      <h2>Problem Statements</h2>
      <div className="problem-list">
        {problemStatements.map((statement, index) => (
          <div className="problem-card" key={index}>
            <span className="index">{index + 1}</span>
            <p>{statement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Problems;