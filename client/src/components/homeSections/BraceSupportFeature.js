import React, { useEffect, useRef } from 'react';
import './BraceSupportFeature.css';

const BraceSupportFeature = () => {
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
    <div className="brace-support-section">
      <div className="brace-support-image-container fade-up" ref={imageRef}>
        <img
          src="https://i.imgur.com/wKUdNQS.jpeg"
          alt="Back Brace with Extra Support"
          className="brace-support-image"
        />
        <div className="brace-support-overlay fade-up" ref={textRef}>
          <h2>Enhanced Stability and Support</h2>
          <p>
            Featuring lateral panels for greater stability, our back brace is ideal for moderate to severe injuries. Get the reliable support you need to recover effectively and stay active.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BraceSupportFeature;
