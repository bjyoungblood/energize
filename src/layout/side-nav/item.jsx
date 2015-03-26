import React from 'react';
import cx from 'classnames';

const SideNavItem = React.createClass({

  propTypes : {
    bold : React.PropTypes.bool,
    active : React.PropTypes.bool,
    hasChildren : React.PropTypes.bool,
    className : React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      bold : false,
      active : false,
    };
  },

  render() {

    let classes = cx(this.props.className, {
      bold : this.props.bold,
      active : this.props.active,
      'no-padding' : this.props.hasChildren,
    });

    return (
      <li {...this.props} className={classes}>
        {this.props.children}
      </li>
    );
  },

});

export default SideNavItem;
