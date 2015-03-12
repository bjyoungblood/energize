/*
 * See: https://web-design-weekly.com/2015/02/05/applying-react-js-css-transitions-initial-render/
 *
 * This component can be removed in a future version of React (when React internalizes it)
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

/*
 * ReactCSSTransitionGroup won't transition its children if they are present
 * on the component's initial render, so it renders an empty transition group,
 * then immediately re-renders with any children as soon as it has mounted,
 * which allows for properly transitioning children.
 */
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
      transitionEnter : true,
      transitionLeave : true,
      transitionAppear : true
    };
  },

  componentDidMount: function() {
    this.setState({
      mounted : true
    });
  },

  render: function() {

    let children;

    if (! this.props.transitionAppear) {
      // if there is no appear transition, render the children now
      children = this.props.children;
    } else if (this.state.mounted) {
      // if we have already mounted, it's okay to render the children
      children = this.props.children;
    }

    return (
      <ReactCSSTransitionGroup
        transitionName={this.props.transitionName}
        transitionEnter={this.props.transitionEnter}
        transitionLeave={this.props.transitionLeave}>
        {children}
      </ReactCSSTransitionGroup>
    );
  }
});

export default ReactCSSTransitionGroupAppear;
