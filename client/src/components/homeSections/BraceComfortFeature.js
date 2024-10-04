import React, { useEffect, useRef } from 'react';
import './BraceComfortFeature.css';

const BraceComfortFeature = () => {
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
    <div className="brace-comfort-section">
      <div className="brace-comfort-image-container fade-up" ref={imageRef}>
        <img
          src="https://i.imgur.com/luDAVMy.jpeg"
          alt="Breathable Back Brace"
          className="brace-comfort-image"
        />
        <div className="brace-comfort-overlay fade-up" ref={textRef}>
          <h2>All-Day Comfort with Breathable Fabric</h2>
          <p>
            Our back brace is crafted from breathable material that helps keep you cool and dry, even during long hours of wear. Experience true support without compromising on comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BraceComfortFeature;
