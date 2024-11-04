import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './logo/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>

      <nav className="menu menu-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>

      <nav className="menu menu-right">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Burger icon with an active state */}
      <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Overlay menu */}
      <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
