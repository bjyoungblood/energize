import React from 'react';
import Router from 'react-router';

const AppContainer = React.createClass({

  render() {
    return <Router.RouteHandler {...this.props} />;
  },

});

export default AppContainer;
