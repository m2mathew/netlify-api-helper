// External Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Internal Dependencies
import Account from './components/Account';
import FourOhFour from './components/FourOhFour';
import Home from './components/Home';
import Setup from './components/Setup';
import Sites from './components/Sites';

// Component Definition
function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Account} path="/account/" />
      <Route component={Sites} path="/sites/" />
      <Route component={Setup} path="/setup/" />
      <Route component={FourOhFour} />
    </Switch>
  );
}

export default Routes;
