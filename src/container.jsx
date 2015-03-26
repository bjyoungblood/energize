import React from 'react';
import cx from 'classnames';

const Container = React.createClass({

  propTypes : {
    className : React.PropTypes.string,
  },

  render() {
    let classes = cx('container', this.props.className);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  },
});

export default Container;
