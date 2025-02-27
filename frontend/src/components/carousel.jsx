import React, { useState, useEffect } from "react";

import ryhma from "../images/ryhma.png"; 
import logo from "../images/algo.png";
import kollaasi from "../images/algo_ry.png"

const photos = [logo,ryhma,kollaasi] 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Slide ${index + 1}`} />
        ))}
      </div>

      <div className="carousel-dots">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
