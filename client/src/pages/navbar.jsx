import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{border: '5px solid grey'}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">D&D Campaign Builder</Link>
        <div className="navbar-nav">
          <Link to="/charactersheet" className="nav-link">Character Sheet</Link>
          <Link to="/encounters" className="nav-link">Encounters</Link>
          <Link to="/monsters" className="nav-link">Monsters</Link>
        </div>
        <div className="navbar-nav ms-auto">
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signout" className="nav-link">Sign Out</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/" className="navbar-item">D&D Campaign Builder</Link>
//       </div>
//       <div className="navbar-menu">
//         <div className="navbar-start">
//           <Link to="/charactersheet" className="navbar-item">Character Sheet</Link>
//           <Link to="/encounters" className="navbar-item">Encounters</Link>
//           <Link to="/monsters" className="navbar-item">Monsters</Link>
//         </div>
//         <div className="navbar-end">
//           <Link to="/profile" className="navbar-item">Profile</Link>
//           <Link to="/login" className="navbar-item">Login</Link>
//           <Link to="/signout" className="navbar-item">Sign Out</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
