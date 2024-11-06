import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from './logo/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');
  const location = useLocation();

  useEffect(() => {
    // Update active page whenever the location changes
    setActivePage(location.pathname);

    // Close the menu when resizing above 900px
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

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
          <li>
            <Link to="/" className={activePage === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className={activePage === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          </li>
        </ul>
      </nav>

      <nav className="menu menu-right">
        <ul>
          <li>
            <Link to="/about" className={activePage === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={activePage === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
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
          <li>
            <Link to="/" className={activePage === '/' ? 'active' : ''} onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className={activePage === '/portfolio' ? 'active' : ''} onClick={toggleMenu}>Portfolio</Link>
          </li>
          <li>
            <Link to="/about" className={activePage === '/about' ? 'active' : ''} onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={activePage === '/contact' ? 'active' : ''} onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
