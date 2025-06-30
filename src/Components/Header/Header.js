

import React, { useState } from 'react';
import './Headers.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="HeaderContainer">
      <a href="#top" className="Logo">Anjali Pusariya</a>

      <nav className={`NavLinks ${menuOpen ? 'open' : ''}`}>
        <a href="#profile">My Profile</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </header>
  );
}

export default Header;
