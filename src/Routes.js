// External Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Internal Dependencies
import Settings from './components/Settings';
import FourOhFour from './components/FourOhFour';
import Home from './components/Home';
import Sites from './components/Sites';

// Component Definition
function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Settings} path="/settings/" />
      <Route component={Sites} path="/sites/" />
      <Route component={FourOhFour} />
    </Switch>
  );
}

export default Routes;
