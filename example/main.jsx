/* global window,document */

import React from 'react';
import router from './router';

window.React = React;

// Initializing touch events
React.initializeTouchEvents(true);

import './sass/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  router.run(function startApplication(Handler, state) {
    React.render(
      <Handler params={state.params} query={state.query} />,
      document.getElementById('app-container')
    );
  });
});
