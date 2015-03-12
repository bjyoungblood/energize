/*
 * See: https://web-design-weekly.com/2015/02/05/applying-react-js-css-transitions-initial-render/
 *
 * This component can be removed in a future version of React (when React internalizes it)
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

const ReactCSSTransitionGroupAppear = React.createClass({

  propTypes: {
    transitionName : React.PropTypes.string.isRequired,
    transitionEnter : React.PropTypes.bool,
    transitionLeave : React.PropTypes.bool,
    transitionAppear : React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      mounted : false
    };
  },

  getDefaultProps: function() {
    return {
      transitionEnter  : true,
      transitionLeave  : true,
      transitionAppear : true
    };
  },

  componentDidMount: function() {
    this.setState({
      mounted : true
    });
  },

  render: function (){

    var children;

    if (! this.props.transitionAppear) {
      children = this.props.children;
    } else {
      if (this.state.mounted) {
        children = this.props.children;
      }
    }

    return(
      <ReactCSSTransitionGroup
        transitionName={this.props.transitionName}
        transitionEnter={this.props.transitionEnter}
        transitionLeave={this.props.transitionLeave}>
        {children}
      </ReactCSSTransitionGroup >
    )
  }
});

export default ReactCSSTransitionGroupAppear;
