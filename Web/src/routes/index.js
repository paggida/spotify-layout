import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/Browse';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
);

export default Routes;
