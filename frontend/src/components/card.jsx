import React from "react";

const Card = ({ number, title, image }) => {
  return (
    <div className="card">
      <svg className="card-svg" viewBox="0 0 300 200">
        <path d="M10,10 L290,10 L290,190 L10,190 Z" fill="black" stroke="#00ffcc" strokeWidth="4" />
      </svg>
      <div className="card-number">{number}</div>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
