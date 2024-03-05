import React from "react";
import { BrowserRouter as Router, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
      {/* Footer */}
      <footer class="footer">
        <p>&copy; 2024 Your D&D Campaign Builder</p>
      </footer>
    </>
  );
};

export default App;
