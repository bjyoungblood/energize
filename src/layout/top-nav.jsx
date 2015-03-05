'use strict';

import React from 'react';
import cx from 'classnames';

import Container from '../container';

const TopNav = React.createClass({

  render() {
    return (
      <nav className="top-nav">
        <Container>
          <div className="nav-wrapper">
            {this.props.children}
          </div>
        </Container>
      </nav>
    );
  },

});

export default TopNav;
