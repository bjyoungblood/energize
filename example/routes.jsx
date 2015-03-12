/*eslint no-unused-vars:0,no-undef:0*/
// https://github.com/eslint/eslint/issues/1978

import { Route } from 'react-router';

import AppLayout from './layouts/app';
import Home from './pages/home';

export default (
  <Route handler={AppLayout}>
    <Route path="/" name="home" handler={Home} />
  </Route>
);
