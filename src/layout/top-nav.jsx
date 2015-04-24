import React from 'react';
import cx from 'classnames';

const TopNav = React.createClass({

  propTypes : {
    className : React.PropTypes.string,
  },

  render() {

    let classes = cx('top-nav', this.props.className);

    return (
      <nav {...this.props} className={classes}>
        {this.props.children}
      </nav>
    );
  },

});

export default TopNav;
