import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/index';
import Components from './pages/components';
import ComponentsButtons from './pages/components/buttons';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/components/buttons">
          <ComponentsButtons />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}