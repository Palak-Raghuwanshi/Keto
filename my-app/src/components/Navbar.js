
import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ items, onSelect, company }) {
  const [active, setActive] = useState("Overview");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setActive(item);
    onSelect(item);
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">

 <div className="navbar-left">
       
        <img src="logo.jpg" alt="Keto Logo" className="navbar-logo" />
        <h1 className="navbar-title">Keto</h1>
      </div>




      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

    
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
        {items.map((item) => (
          <button
            key={item}
            onClick={() => handleSelect(item)}
            className={`nav-button ${active === item ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
