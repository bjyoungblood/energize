import React from 'react';
import cx from 'classnames';

import Section from './section';

const Collapsible = React.createClass({

  propTypes : {
    className : React.PropTypes.string,
  },

  render() {
    let classes = cx(this.props.className, 'collapsible');

    return (
      <ul className={classes}>
        {this.props.children}
      </ul>
    );
  },

});

Collapsible.Section = Section;

export default Collapsible;
