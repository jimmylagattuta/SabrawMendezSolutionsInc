import React, { useState, useEffect } from 'react';
import './Intro.css';

const images = [
  'https://i.imgur.com/q3ci2cb.jpeg'
];

const Intro = () => {
  const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 3000); // Switches images every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Easy-to-use Universal Brace</h1>
          <p>Breathable. Universal. Lumbar-sacral orthotic brace.</p>
          <button className="hero-button">Your Button</button>
        </div>
      </div>
      <div className="hero-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slideshow"
            className={`hero-image ${index === currentImage ? 'fade-in' : 'fade-out'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
