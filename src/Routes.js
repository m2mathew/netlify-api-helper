// External Dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Internal Dependencies
import About from './components/About';
import Home from './components/Home';
import Sites from './components/Sites';

// Component Definition
function Routes() {
  return (
    <>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about/" />
      <Route component={Sites} path="/sites/" />
    </>
  );
}

export default Routes;
