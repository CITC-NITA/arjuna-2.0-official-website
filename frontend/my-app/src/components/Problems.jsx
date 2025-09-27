import React from 'react';
import "../styles/problems.css";
import bg from "../assets/about-bg.jpg";

const problemStatements = [
  "AI-BASED SMART FOOD WASTE MANAGEMENT",
  "SMART DRAINAGE AND FLOOD PREVENTION SYSTEM",
  "CARBON FOOTPRINT TRACKER FOR INDIVIDUALS",
  "SMART ENERGY RECOVERY SYSTEM"
];

const Problems = () => {
  

  return (
    <section id="problems" className='problems-section' style={{backgroundImage:`url(${bg})`}}> 
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