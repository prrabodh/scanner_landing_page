import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/School-icon.svg"
            alt="logo"
            width="46"
            height="46"
          />
          <Link to="/" className="site-title">Greenfield High</Link>
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
