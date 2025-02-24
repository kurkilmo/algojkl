import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

const DropdownMenu = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">{title}</button>
      {isOpen && (
        <div className="dropdown-content">
          {links.map((link, index) => (
            <Link key={index} to={link.path}>{link.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
