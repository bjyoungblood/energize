'use strict';

import React from 'react';
import cx from 'classnames';

import Container from '../../container';
import IconButton from '../../icon-button';

const SideNavToggle = React.createClass({

  propTypes : {
    onClick : React.PropTypes.func,
  },

  render() {
    let classes = cx(this.props.className, 'button-collapse', 'top-nav', 'full');

    return (
      <Container>
        <a className={classes} onClick={this.props.onClick}>
          <IconButton type="navigation-menu" />
        </a>
      </Container>
    );
  },

});

export default SideNavToggle;
