import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/index';
import Buttons from './pages/buttons';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}