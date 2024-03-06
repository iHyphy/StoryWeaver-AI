import React from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import Navbar from "./pages/navbar";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <div className="container">
        <Outlet />
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your D&D Campaign Builder</p>
      </footer>
    </>
  );
}

export default App;
