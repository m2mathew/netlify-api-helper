// External Dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Internal Dependencies
import Account from './components/Account';
import Home from './components/Home';
import Sites from './components/Sites';

// Component Definition
function Routes() {
  return (
    <>
      <Route component={Home} exact path="/" />
      <Route component={Account} path="/account/" />
      <Route component={Sites} path="/sites/" />
    </>
  );
}

export default Routes;
