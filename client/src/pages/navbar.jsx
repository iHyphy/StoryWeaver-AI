import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ border: '2px solid blue', backgroundColor: 'grey' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ fontSize: '24px', color: 'black' }}>D&D Campaign Builder</Link>
        <div className="navbar-nav">
          <Link to="/charactersheet" className="nav-link" style={{ fontSize: '18px', color: 'black' }}>Character Sheet</Link>
          <Link to="/encounters" className="nav-link" style={{ fontSize: '18px', color: 'black' }}>Encounters</Link>
          <Link to="/monsters" className="nav-link" style={{ fontSize: '18px', color: 'black' }}>Monsters</Link>
        </div>
        <div className="navbar-nav ms-auto">
          <Link to="/profile" className="nav-link" style={{ fontSize: '18px', color: 'black' }}>Profile</Link>
          <Link to="/login" className="nav-link" style={{ fontSize: '18px', color: 'black' }}>Login</Link>
          <Link to="/signout" className="nav-link" style={{ fontSize: '18px', color: 'black' }}>Sign Out</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
