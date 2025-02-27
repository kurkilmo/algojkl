import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"

const DropdownMenu = ({ title, links, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false)

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
            <Link key={index} to={link.path} onClick={(e) => {
                if (onItemClick)
                    onItemClick()
              }}
            >{link.label}</Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
