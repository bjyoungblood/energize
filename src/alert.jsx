import React from 'react';
import cx from 'classnames';

const Alert = React.createClass({
  propTypes : {
    color : React.PropTypes.string,
    depth : React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      color : 'blue',
      depth : 1,
    };
  },

  render() {

    let classes = cx(
      'alert',
      `alert-${this.props.color}`,
      `z-depth-${this.props.depth}`
    );

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  },
});

export default Alert;
