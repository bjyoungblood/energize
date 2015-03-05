'use strict';

import React from 'react';
import cx from 'classnames';

const SideNav = React.createClass({

  render() {
    let classes = cx(this.props.className, 'side-nav', 'fixed');

    return (
      <ul className={classes}>
        {this.props.children}
      </ul>
    );
  },
});

export default SideNav;
