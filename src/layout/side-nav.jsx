'use strict';

import React from 'react';
import cx from 'classnames';

import LayeredComponent from '../mixins/layered-component';

const SideNav = React.createClass({

  mixins : [ LayeredComponent ],

  propTypes : {
    onDismiss : React.PropTypes.func.isRequired,
    open : React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      open : false
    };
  },

  render() {
    let classes = cx(this.props.className, 'side-nav', 'fixed', {
      open : this.props.open,
    });

    return (
      <ul className={classes}>
        {this.props.children}
      </ul>
    );
  },

  renderLayer() {

    console.log(this.props);
    let classes = cx({
      overlay : true,
      visible : this.props.open,
    });

    return (
      <div className={classes} onClick={this.props.onDismiss} />
    );
  },
});

export default SideNav;
