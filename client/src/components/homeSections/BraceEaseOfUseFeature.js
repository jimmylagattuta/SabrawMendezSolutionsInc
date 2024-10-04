import React, { useEffect, useRef } from 'react';
import './BraceEaseOfUseFeature.css';

const BraceEaseOfUseFeature = () => {
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
    <div className="brace-easeofuse-section">
      <div className="brace-easeofuse-image-container fade-up" ref={imageRef}>
        <img
          src="https://i.imgur.com/YzbYDIw.jpeg"
          alt="Back Brace Pulley System"
          className="brace-easeofuse-image"
        />
        <div className="brace-easeofuse-overlay fade-up" ref={textRef}>
          <h2>Effortless Adjustability for Everyone</h2>
          <p>
            The easy-to-use pulley system and pull tabs allow users to effortlessly adjust the brace to achieve optimal compression. Designed to provide relief, even for patients with arthritis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BraceEaseOfUseFeature;
