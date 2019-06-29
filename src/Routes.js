// External Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Internal Dependencies
import Account from './components/Account';
import FourOhFour from './components/FourOhFour';
import Home from './components/Home';
import Sites from './components/Sites';

// Component Definition
function Routes() {
  return (
    <>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={FourOhFour} />
      </Switch>
      <Route component={Account} path="/account/" />
      <Route component={Sites} path="/sites/" />
    </>
  );
}

export default Routes;
