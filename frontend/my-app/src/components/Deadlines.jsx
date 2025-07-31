import React, { useEffect, useRef, useState } from "react";
import '../styles/deadlines.css';
import trophy from "../assets/trophy.png";
import bg from "../assets/about-bg.jpg";

const Deadlines = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="deadlines"
      className={`timeline-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef} style={{ backgroundImage: `url(${bg})` }}
    >
      <h2>DEADLINES OF ARJUNA 2.0</h2>
      <div className="timeline">
        <div className="line"></div>

        <div className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <h3>LAST DATE OF REGISTRATION</h3>
            <p>10TH JUNE, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <h3>LAST DATE OF IDEA SUBMISSION</h3>
            <p>25TH JUNE, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <h3>GRAND FINALE</h3>
            <p>28TH JULY, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="winner" style={{backgroundImage:`url(${trophy})`,backgroundSize:'cover'}}></div>
        </div>


      </div>
    </section>
  );
};

export default Deadlines;
