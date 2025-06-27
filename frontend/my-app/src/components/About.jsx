import React from "react";
import "../styles/about.css";
import bg from "../assets/about-bg.jpg";

const About = () => (
  <section id="about" className="section" style={{ backgroundImage: `url(${bg})` }}>
    <h2>About the Hackathon</h2>
    <p>
      Arjuna: North East Tech Summit is a nationwide initiative taken by Civil
      Innovation and Technology Cell, National Institute of Technology Agartala,
      to provide students a platform to solve some of the REAL WORLD problems we
      face in our daily lives, and thus inculcate a culture of product
      innovation and a mindset of problem solving
    </p>
  </section>
);

export default About;
