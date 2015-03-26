import React from 'react';
import cx from 'classnames';

const CollapsibleSection = React.createClass({

  propTypes : {
    onToggle : React.PropTypes.func.isRequired,
    header : React.PropTypes.node,
    open : React.PropTypes.bool,
    className : React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      onChange : function() {},
      header : '',
      open : false,
    };
  },

  render() {
    let liClasses = cx(this.props.className, {
      active : this.props.open,
    });

    let bodyClasses = cx('collapsible-body', {
      collapsed : ! this.props.open,
    });

    let children;
    if (this.props.open) {
      children = (
        <div className={bodyClasses}>
          {this.props.children}
        </div>
      );
    }

    return (
      <li className={liClasses}>
        <div className="collapsible-header" onClick={this.props.onToggle}>
          {this.props.header}
        </div>
        {children}
      </li>
    );
  },
});

export default CollapsibleSection;
