import React, { useEffect, useRef } from 'react';
import './BraceReliefFeature.css';

const BraceReliefFeature = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to handle fade-up animations
    const options = {
      threshold: 0.1,
    };

    const handleFadeUp = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleFadeUp, options);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="brace-relief-section">
      <div className="brace-relief-image-container fade-up" ref={imageRef}>
        <img
          src="https://i.imgur.com/fMHc5rN.webp"
          alt="Back Pain Relief"
          className="brace-relief-image"
        />
      </div>
      <div className="brace-relief-overlay fade-up" ref={textRef}>
        <h2>Experience Effective Back Pain Relief</h2>
        <p>
          Our lumbar-sacral orthotic brace offers optimal compression to help alleviate pain, giving you the support you need to get back on your feet.
        </p>
      </div>
    </div>
  );
};

export default BraceReliefFeature;
