'use strict';

import React from 'react';

const SideNavLogo = React.createClass({

  render() {

    return (
      <li {...this.props} className="logo-wrapper">
        <div className="logo">{this.props.children}</div>
      </li>
    );
  },
});

export default SideNavLogo;
