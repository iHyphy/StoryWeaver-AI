import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/background.jpg"; // Import your background image

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
=======
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Nav } from 'react-bootstrap';
import './home.css';
>>>>>>> 86e370d (added bootstrap. and fixed some .jsx files as well)

const Home = () => {
  return (
<<<<<<< HEAD
    <div style={backgroundStyle}>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">D&D Campaign Builder</Link>
        </div>
        {/* Add more navbar items if needed */}
        <div className="navbar-end">
          {/* Add signup link here */}
          <Link to="/signup" className="navbar-item">Sign Up</Link>
        </div>
      </nav>
      <div className="hero">
        <h1 style={{ color: '#fff' }}>Welcome to the D&D Campaign Builder</h1>
        <p style={{ color: '#fff' }}>Create, manage, and organize your Dungeons & Dragons campaigns with ease.</p>
        <div className="cta-buttons">
          <Link to="/create-campaign" className="button">Create New Campaign</Link>
          <Link to="/view-campaigns" className="button">View Existing Campaigns</Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer" style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center' }}>
        <p style={{ color: '#fff' }}>&copy; 2024 Your D&D Campaign Builder</p>
      </footer>
=======
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
>>>>>>> 86e370d (added bootstrap. and fixed some .jsx files as well)
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 86e370d (added bootstrap. and fixed some .jsx files as well)
