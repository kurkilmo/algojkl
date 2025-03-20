import React from "react";

const Perustajat = ({ image, members, year }) => {
  return (
    <div className="kunnia-container">
      <h2>Perustajajäsenet & Hallitus {year}</h2>
      <div className="perustaja-flex">
        <img src={image} alt="hallitus" width={250} />
        <ul className="perustaja">
          {members.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong>, {member.role} {year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Perustajat;
