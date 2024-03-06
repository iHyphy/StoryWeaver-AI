import React from 'react';
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

  return (
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
    </div>
  );
}

export default Home;
