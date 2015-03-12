import React from 'react';

const Col = React.createClass({

  propTypes : {
    sm : React.PropTypes.number,
    md : React.PropTypes.number,
    lg : React.PropTypes.number,

    className : React.PropTypes.string,

    smOffset : React.PropTypes.number,
    mdOffset : React.PropTypes.number,
    lgOffset : React.PropTypes.number,
  },

  getClasses() {
    let classes = [
      'col',
    ];

    if (this.props.sm) {
      classes.push('s' + this.props.sm);
    }

    if (this.props.md) {
      classes.push('m' + this.props.md);
    }

    if (this.props.lg) {
      classes.push('l' + this.props.lg);
    }

    if (this.props.smOffset) {
      classes.push('offset-s' + this.props.smOffset);
    }

    if (this.props.mdOffset) {
      classes.push('offset-m' + this.props.mdOffset);
    }

    if (this.props.lgOffset) {
      classes.push('offset-l' + this.props.lgOffset);
    }

    if (this.props.className) {
      classes.push(String(this.props.className).trim());
    }

    return classes.join(' ');
  },

  render() {
    return (
      <div {...this.props} className={this.getClasses()}>
        {this.props.children}
      </div>
    );
  },
});

export default Col;
