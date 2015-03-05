'use strict';

import React from 'react';
import Router from 'react-router';

import AppLayout from './layouts/app';
import Home from './pages/home';

export default (
  <Router.Route handler={AppLayout}>
    <Router.Route path="/" name="home" handler={Home} />
  </Router.Route>
);
