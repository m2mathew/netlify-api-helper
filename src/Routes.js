// External Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Internal Dependencies
import About from './components/About';
import Home from './components/Home';
import Sites from './components/Sites';

// Component Definition
function Routes() {
  return (
    <Router>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about/" />
      <Route component={Sites} path="/sites/" />
    </Router>
  );
}

export default Routes;
