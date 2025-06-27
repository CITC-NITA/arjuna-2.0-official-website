import React, { useEffect, useRef, useState } from 'react';
import "../styles/faq.css";

const faqList = [
  {
    question: "WHO CAN PARTICIPATE?",
    answer: "College/university students irrespective of branch, year, domain, across the country are encouraged to take part in this renowned competition.",
  },
  {
    question: "HOW DO I REGISTER?",
    answer: "Team Leader has to register through the Google Form.",
  },
  {
    question: "WHEN TO REGISTER?",
    answer: "Team Leader has to register on or before 10th June, 2025 tentatively.",
  },
  {
    question: "WHAT IF I DO NOT REGISTER?",
    answer: "Unregistered team won't be allowed to take part in the competition after the deadline.",
  },
  {
    question: "IS THERE ANY REGISTRATION FEE?",
    answer: "No.",
  },
  {
    question: "CAN ANY TEAM PARTICIPATE IN MORE THAN ONE PROBLEM STATEMENT?",
    answer: "NO.",
  }
];

const FAQ = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) obs.observe(currentRef);
    return () => {
      if (currentRef) obs.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="FAQ" className={`faq-section ${visible ? 'visible' : ''}`} ref={sectionRef}>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqList.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h3>{index + 1}. {faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
