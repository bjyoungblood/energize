'use strict';

import React from 'react';
import cx from 'classnames';

const Table = React.createClass({
  propTypes: {
    striped: React.PropTypes.bool,
    bordered: React.PropTypes.bool,
    centered: React.PropTypes.bool,
    hoverable: React.PropTypes.bool,
    responsive: React.PropTypes.bool
  },

  render: function () {

    var classes = {
      'responsive-table' : this.props.responsive,
      'striped' : this.props.striped,
      'bordered' : this.props.bordered,
      'centered' : this.props.centered,
      'hoverable' : this.props.hoverable
    };

    return (
      <table {...this.props} className={cx(classes)}>
        {this.props.children}
      </table>
    );
  }
});

export default Table;
