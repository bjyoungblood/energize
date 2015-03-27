/*
 * See: https://web-design-weekly.com/2015/02/05/applying-react-js-css-transitions-initial-render/
 *
 * This component can be removed in a future version of React (when React internalizes it)
 */

import React from 'react';
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ReactCSSTransitionGroupChild from 'react/lib/ReactCSSTransitionGroupChild';

/*
 * ReactCSSTransitionGroup won't transition its children if they are present
 * on the component's initial render, so it renders an empty transition group,
 * then immediately re-renders with any children as soon as it has mounted,
 * which allows for properly transitioning children.
 */
const ReactCSSTransitionGroupAppear = React.createClass({

  propTypes : {
    transitionName : React.PropTypes.string.isRequired,
    transitionAppear : React.PropTypes.bool,
    transitionEnter : React.PropTypes.bool,
    transitionLeave : React.PropTypes.bool,
    component : React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      transitionAppear : true,
      transitionEnter : true,
      transitionLeave : true,
      component : 'span',
    };
  },

  wrapChild(child) {
    /* eslint-disable new-cap */
    return React.createElement(ReactCSSTransitionGroupChild, {
      name : this.props.transitionName,
      appear : this.props.transitionAppear,
      enter : this.props.transitionEnter,
      leave : this.props.transitionLeave,
    }, child);
    /* eslint-enable new-cap */
  },

  render() {

    return (
      <ReactTransitionGroup
        {...this.props}
        childFactory={this.wrapChild}
        component={this.props.component}
      />
    );

  },

});

export default ReactCSSTransitionGroupAppear;
