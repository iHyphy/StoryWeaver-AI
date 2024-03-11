// Routes.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CharacterSheet from './pages/CharacterSheet'; // Import the CharacterSheet component

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} /> {/* Home route */}
        <Route path="/charactersheet" component={CharacterSheet} /> {/* CharacterSheet route */}
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
