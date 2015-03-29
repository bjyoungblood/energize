/* global window */
import React from 'react';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

function offset(el) {
  let box = el.getBoundingClientRect();
  let doc = el.ownerDocument.documentElement;

  return {
    top : box.top + window.pageYOffset - doc.clientTop,
    left : box.left + window.pageXOffset - doc.clientLeft,
  };
}

const WaveMaker = React.createClass({

  propTypes : {
    color : React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      color : 'light',
    };
  },

  getInitialState() {
    return {
      initialRender : true,
      active : false,
      lastClickEvent : null,
      clickCount : 0,
    };
  },

  getRippleStyle(el) {
    let elOffset = offset(el);

    let top = 0;
    let left = 0;
    let height = el.clientWidth / 2;
    let width = el.clientWidth / 2;
    let marginTop = 0 - (el.clientWidth / 4);
    let marginLeft = 0 - (el.clientWidth / 4);

    if (this.state.pageY && this.state.pageX) {
      top = (this.state.pageY - elOffset.top) + 'px';
      left = (this.state.pageX - elOffset.left) + 'px';
    }

    return { top, left, height, width, marginLeft, marginTop };
  },

  renderRipple() {
    if (this.state.initialRender) {
      return null;
    }

    let node = React.findDOMNode(this);

    let ripple;
    if (this.state.active) {

      ripple = (
        <div key={this.state.clickCount}
             className="waves-ripple"
             style={this.getRippleStyle(node)} />
      );
    }

    return (
      <ReactCSSTransitionGroup key="tx-group" transitionName="waves-ripple">
        {ripple}
      </ReactCSSTransitionGroup>
    );
  },

  componentDidMount() {
    if (this.state.initialRender) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ initialRender : false });
      /* eslint-enable react/no-did-mount-set-state */
    }
  },

  onMouseDown(childHandler, event) {
    if (childHandler) {
      childHandler(event);
    }

    this.setState({
      active : true,
      clickCount : this.state.clickCount + 1,
      pageX : event.pageX,
      pageY : event.pageY,
    });
  },

  onMouseUp(childHandler, event) {
    if (childHandler) {
      childHandler(event);
    }

    this.setState({
      active : false,
    });
  },

  render() {
    let child = React.Children.only(this.props.children);

    let props = {
      key : child.props.key || 'waves-child',
      className : cx(child.props.className, 'waves-effect', 'waves-' + this.props.color),
      onMouseDown : this.onMouseDown.bind(this, child.props.onMouseDown),
      onMouseUp : this.onMouseUp.bind(this, child.props.onMouseUp),
    };

    return React.cloneElement(child, props, [ child.props.children, this.renderRipple(child) ]);
  },

});

export default WaveMaker;
