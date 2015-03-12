import React from 'react';
import cx from 'classnames';

const Header = React.createClass({

  getDefaultProps() {
    return {
      fixedNav : false,
    };
  },

  render() {
    let headerClasses = cx('app-header', {
      'fixed-nav' : this.props.fixedNav,
    }, this.props.className);

    return (
      <header {...this.props} className={headerClasses}>
        {this.props.children}
      </header>
    );
  },

});

export default Header;
