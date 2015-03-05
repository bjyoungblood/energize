'use strict';

import React from 'react';
import Container from '../../container';
import IconButton from '../../icon-button';

const SideNavToggle = React.createClass({

  propTypes : {
    onClick : React.PropTypes.func,
  },

  render() {
    return (
      <Container>
        <a className="button-collapse top-nav full" onClick={this.props.onClick}>
          <IconButton type="navigation-menu" />
        </a>
      </Container>
    );
  },

});

export default SideNavToggle;
