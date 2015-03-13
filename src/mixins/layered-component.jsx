/* global document */
/*
 * Adapted from Khan Academy's react-components
 *
 * https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
 *
 * Create a new "layer" on the page, like a modal or overlay.
 *
 * const LayeredComponent = React.createClass({
 *     mixins: [LayeredComponentMixin],
 *     render: function() {
 *         // render like usual
 *     },
 *     renderLayer: function() {
 *         // render a separate layer (the modal or overlay)
 *     }
 * });
 */

import React from 'react';

const LayeredComponentMixin = {
  componentDidMount() {
    // Appending to the body is easier than managing the z-index of
    // everything on the page.  It's also better for accessibility and
    // makes stacking a snap (since components will stack in mount order).
    this.layer = document.createElement('div');
    document.body.appendChild(this.layer);
    this.mountLayer();
  },

  componentDidUpdate() {
    this.mountLayer();
  },

  componentWillUnmount() {
    this.unmountLayer();
    document.body.removeChild(this.layer);
  },

  mountLayer() {
    // By calling this method in componentDidMount() and
    // componentDidUpdate(), you're effectively creating a "wormhole" that
    // funnels React's hierarchical updates through to a DOM node on an
    // entirely different part of the page.

    let layerElement = this.renderLayer();
    // Renders can return null, but React.render() doesn't like being asked
    // to render null. If we get null back from renderLayer(), just render
    // a noscript element, like React does when an element's render returns
    // null.
    if (layerElement === null) {
      React.render(<noscript />, this.layer);
    } else {
      React.render(layerElement, this.layer);
    }

    if (this.layerDidMount) {
      this.layerDidMount(this.layer);
    }
  },

  unmountLayer() {
    if (this.layerWillUnmount) {
      this.layerWillUnmount(this.layer);
    }

    React.unmountComponentAtNode(this.layer);
  },
};

export default LayeredComponentMixin;
