'use strict';

import React from 'react';
import cx from 'classnames';

const SideNav = React.createClass({

  propTypes : {
    logo : React.PropTypes.node,
    fixed : React.PropTypes.bool, // @todo
  },

  getDefaultProps() {
    return {
      fixed : true,
      logo : null,
    };
  },

  render() {
    let classes = cx({
      'side-nav' : true,
      'fixed' : this.props.fixed,
    });

    return (
      <ul className={classes}>
        {this.props.children}
      </ul>
    );
  },
});

export default SideNav;
