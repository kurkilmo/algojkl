import React from "react";

const Card = ({ number, title, image }) => {
  return (
    <div className="card">
      <div className="card-number">{number}</div>
      <svg
        width="100mm"
        height="100mm"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs id="defs1" />
        <g id="layer1">
          <path
            style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#4ce188",
                strokeWidth: 2.319,
                strokeDasharray: "none",
                strokeOpacity: 1,
                strokeLinejoin: "miter",
                strokeLinecap: "butt",
                paintOrder: "markers fill stroke",
            }}
            d="m 25.608153,239.71113
            c 134.195517,0.99507 136.401007,0.80534 136.401007,0.80534
            l 0.0788,-109.98727
            H 71.892453
            L 60.1381,111.6228
            H 25.85457
            Z  "
            id="Ukkeli"
            />
        </g>
      </svg>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
