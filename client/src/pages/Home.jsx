import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Nav } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>StoryWeaver AI</h1>
      </header>
      <Nav variant="tabs" className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/charactersheet">Character Sheet</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/gameboard">Gameboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signin">Sign In</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content">
        {/* Content for the current tab will be rendered here */}
      </div>
    </div>
  );
};

export default Home;