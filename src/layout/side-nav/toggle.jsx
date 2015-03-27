import React from 'react';
import cx from 'classnames';

import Container from '../../container';
import IconButton from '../../icon-button';

const SideNavToggle = React.createClass({

  propTypes : {
    onClick : React.PropTypes.func,
    className : React.PropTypes.string,
  },

  render() {
    let classes = cx(this.props.className, 'button-collapse');

    return (
      <a className={classes} onClick={this.props.onClick}>
        <IconButton type="navigation-menu" />
      </a>
    );
  },

});

export default SideNavToggle;
