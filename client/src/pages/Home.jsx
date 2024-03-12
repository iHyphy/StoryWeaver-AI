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

  const footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    padding: '20px' // Add padding to give space around the text
  };

  return (
    <div style={backgroundStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">D&D Campaign Builder</Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero">
        <h1 style={{ color: '#fff' }}>Welcome to the D&D Campaign Builder</h1>
        <p style={{ color: '#fff' }}>Create, manage, and organize your Dungeons & Dragons campaigns with ease.</p>
        <div className="cta-buttons">
          <Link to="/create-campaign" className="btn btn-primary">Create New Campaign</Link>
          <Link to="/view-campaigns" className="btn btn-secondary">View Existing Campaigns</Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer" style={footerStyle}>
        <p>"There were two undeniable truths in the Realms: It was very easy to overestimate a drow and even easier to underestimate a dwarf."
          <br/>- R.A. Salvatore, Maestro
        </p>
      </footer>
    </div>
  );
}
export default Home;
//   return (
//     <div style={backgroundStyle}>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <Link to="/" className="navbar-brand">D&D Campaign Builder</Link>
//           <div className="navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link to="/signup" className="nav-link">Sign Up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="hero">
//         <h1 style={{ color: '#fff' }}>Welcome to the D&D Campaign Builder</h1>
//         <p style={{ color: '#fff' }}>Create, manage, and organize your Dungeons & Dragons campaigns with ease.</p>
//         <div className="cta-buttons">
//           <Link to="/create-campaign" className="btn btn-primary">Create New Campaign</Link>
//           <Link to="/view-campaigns" className="btn btn-secondary">View Existing Campaigns</Link>
//         </div>
//       </div>
//       {/* Footer */}
//       <footer className="footer" style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center' }}>
//         <p style={{ color: '#fff' }}>&copy; “..There were two undeniable truths in the Realms: It was very easy to overestimate a drow and even easier to underestimate a dwarf.”
// ― R.A. Salvatore, Maestro</p>
//       </footer>
//     </div>
//   );
// }
// export default Home;

//   return (
//     <div style={backgroundStyle}>
//       <nav className="navbar">
//         <div className="navbar-brand">
//           <Link to="/" className="navbar-item">D&D Campaign Builder</Link>
//         </div>
//         {/* Add more navbar items if needed */}
//         <div className="navbar-end">
//           {/* Add signup link here */}
//           <Link to="/signup" className="navbar-item">Sign Up</Link>
//         </div>
//       </nav>
//       <div className="hero">
//         <h1 style={{ color: '#fff' }}>Welcome to the D&D Campaign Builder</h1>
//         <p style={{ color: '#fff' }}>Create, manage, and organize your Dungeons & Dragons campaigns with ease.</p>
//         <div className="cta-buttons">
//           <Link to="/create-campaign" className="button">Create New Campaign</Link>
//           <Link to="/view-campaigns" className="button">View Existing Campaigns</Link>
//         </div>
//       </div>
//       {/* Footer */}
//       <footer className="footer" style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center' }}>
//         <p style={{ color: '#fff' }}>&copy; 2024 Your D&D Campaign Builder</p>
//       </footer>
//     </div>
//   );
// }
// export default Home;