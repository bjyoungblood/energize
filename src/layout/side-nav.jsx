import React from 'react';
import cx from 'classnames';

import Item from './side-nav/item';
import Logo from './side-nav/logo';
import Toggle from './side-nav/toggle';

import TransitionIn from '../transition-in';
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

    let overlay;

    if (this.props.open) {
      overlay = (
        <div key="overlay"
             className="overlay side-nav-overlay"
             onClick={this.props.onDismiss} />
      );
    }

    return (
      <TransitionIn transitionName="overlay-fade">
        {overlay}
      </TransitionIn>
    );
  },
});

SideNav.Item = Item;
SideNav.Logo = Logo;
SideNav.Toggle = Toggle;

export default SideNav;
