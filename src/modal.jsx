'use strict';

import React from 'react';
import cx from 'classnames';

import TransitionIn from './transition-in';
import LayeredComponent from './mixins/layered-component';

let Modal = React.createClass({

  mixins : [ LayeredComponent ],

  propTypes : {
    onBackgroundClick : React.PropTypes.func.isRequired,
    visible : React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      visible : false
    };
  },

  render() {
    let modal;

    if (this.props.visible === true) {
      let classes = cx(this.props.className, 'modal', {
        visible : this.props.visible,
      });

      modal = (
        <div key="modal" className={classes}>
          {this.props.children}
        </div>
      );
    }

    return (
      <TransitionIn transitionName="modal-fade">
        {modal}
      </TransitionIn>
    );
  },

  renderLayer() {
    let overlay;

    if (this.props.visible === true) {
      overlay = (
        <div key="overlay"
             className="overlay modal-overlay"
             onClick={this.props.onBackgroundClick} />
      );
    }

    return (
      <TransitionIn transitionName="overlay-fade">
        {overlay}
      </TransitionIn>
    );
  },
});

Modal.Content = React.createClass({
  render() {
    return (
      <div {...this.props} className="modal-content">
        {this.props.children}
      </div>
    );
  },
});

Modal.Footer = React.createClass({
  render() {
    return (
      <div {...this.props} className="modal-footer">
        {this.props.children}
      </div>
    );
  },
});

export default Modal;
