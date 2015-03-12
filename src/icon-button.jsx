import React from 'react';
import cx from 'classnames';

const IconButton = React.createClass({

  propTypes : {
    type : React.PropTypes.string.isRequired,
  },

  getDefaultProps() {
    return {
      type : '',
    };
  },

  render() {

    let classes = cx('mdi-' + this.props.type, this.props.classNames);

    return (
      <i {...this.props} className={classes} />
    );
  },

});

export default IconButton;
