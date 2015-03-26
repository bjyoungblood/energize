import React from 'react';
import cx from 'classnames';

import Container from '../container';

const TopNav = React.createClass({

  propTypes : {
    className : React.PropTypes.string,
  },

  render() {

    let classes = cx('top-nav', this.props.className);

    return (
      <nav {...this.props} className={classes}>
        <Container>
          <div className="nav-wrapper">
            {this.props.children}
          </div>
        </Container>
      </nav>
    );
  },

});

export default TopNav;
