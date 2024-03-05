import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Nav } from 'react-bootstrap';
import '../src/pages/Home';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>StoryWeaver AI</h1>
      </header>
      <Nav variant="tabs" className="justify-content-center">
        <Nav.Item>
          <Link to="/CharacterSheet" className="nav-link">Character Sheet</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/gameboard" className="nav-link">Gameboard</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Signup" className="nav-link">Sign In</Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content">
        {/* Content for the current tab will be rendered here */}
      </div>
    </div>
  );
};

export default Home;