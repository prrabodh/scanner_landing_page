import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo_1.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            width="46"
            height="46"
          />
          <Link to="/" className="site-title">Greenfield High</Link>
        </div>

        <div className="ticker-container">
          <div className="ticker-content">
            <h1>Greenfield High School</h1>
            <p>Your future begins here — learn, grow, and succeed.</p>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
