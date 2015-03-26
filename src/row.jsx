import React from 'react';
import cx from 'classnames';

const Row = React.createClass({

  propTypes : {
    className : React.PropTypes.string,
  },

  render() {
    let classes = cx('row', this.props.className);

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  },

});

export default Row;
