// CursorTrail.jsx
import { useEffect } from 'react';
import '../styles/cursortrail.css';

const CursorTrail = () => {
  useEffect(() => {
    const trailContainer = document.createElement('div');
    trailContainer.className = 'trail-container';
    document.body.appendChild(trailContainer);

    const createTrail = (x, y) => {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      trailContainer.appendChild(dot);

      setTimeout(() => {
        trailContainer.removeChild(dot);
      }, 500); // Duration of the trail
    };

    const handleMouseMove = (e) => {
      createTrail(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(trailContainer);
    };
  }, []);

  return null;
};

export default CursorTrail;
