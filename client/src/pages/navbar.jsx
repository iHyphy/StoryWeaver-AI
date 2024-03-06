import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">D&D Campaign Builder</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/charactersheet" className="navbar-item">Character Sheet</Link>
          <Link to="/encounters" className="navbar-item">Encounters</Link>
          <Link to="/monsters" className="navbar-item">Monsters</Link>
        </div>
        <div className="navbar-end">
          <Link to="/profile" className="navbar-item">Profile</Link>
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/signout" className="navbar-item">Sign Out</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
