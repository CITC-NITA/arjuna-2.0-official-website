import React, { useRef, useEffect, useState } from 'react';
import '../styles/prizes.css';
import bg from "../assets/about-bg.jpg";

const Prizes = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      if (ref.current) obs.unobserve(ref.current);
    };
  }, []);

  return (
    <section id="prizes" ref={ref} className={`section highlight ${visible ? 'visible' : ''}`} style={{backgroundImage:`url(${bg})`}}>
      <h2>Grand Finale</h2>
      <ul>
        <li>One winning team per problem statement</li>
        <li>Prize: ₹30,000 per winning team</li>
        <li>Final decision by judging panel</li>
        <li>Out-of-the-box ideas encouraged</li>
      </ul>
    </section>
  );
};

export default Prizes;
