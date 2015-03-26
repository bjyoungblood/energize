import React from 'react';
import cx from 'classnames';

const IconButton = React.createClass({

  propTypes : {
    type : React.PropTypes.string.isRequired,
    className : React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      type : '',
    };
  },

  render() {

    let classes = cx('mdi-' + this.props.type, this.props.className);

    return (
      <i {...this.props} className={classes} />
    );
  },

});

export default IconButton;
