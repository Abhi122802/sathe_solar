import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Sathe-Solar</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" exact className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/solutions" className="nav-link" activeClassName="active">
          Solutions
        </NavLink>
        <NavLink to="/products" className="nav-link" activeClassName="active">
          Products
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
