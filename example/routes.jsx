import React from 'react';
import { Route } from 'react-router';

import AppLayout from './layouts/app';
import Home from './pages/home';

export default (
  <Route handler={AppLayout}>
    <Route path="/" name="home" handler={Home} />
  </Route>
);
