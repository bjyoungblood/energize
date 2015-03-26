import React from 'react';

import Col from './col';

/*
 * Use this if you're making a large number of homogeneous columns to wrap elements.
 *
 * Transform this:
 *
 *   <Row>
 *     <Col md={4} sm={12}><input value="input1" /></Col>
 *     <Col md={4} sm={12}><input value="input2" /></Col>
 *     <Col md={4} sm={12}><input value="input3" /></Col>
 *     <Col md={4} sm={12}><input value="input4" /></Col>
 *   </Row>
 *
 * ... into this:
 *
 *   <Row>
 *     <AutoCols md={4} sm={12}>
 *       <input value="input1" />
 *       <input value="input2" />
 *       <input value="input3" />
 *       <input value="input4" />
 *     <AutoCols>
 *   </Row>
 */
const AutoCols = React.createClass({
  propTypes : {
    sm : React.PropTypes.number,
    md : React.PropTypes.number,
    lg : React.PropTypes.number,

    className : React.PropTypes.string,

    smOffset : React.PropTypes.number,
    mdOffset : React.PropTypes.number,
    lgOffset : React.PropTypes.number,
  },

  render() {

    // @todo could likely use React.createFragment in React 0.13
    let children = React.Children.map(this.props.children, (child, idx) => {
      return (
        <Col {...this.props} key={idx}>
          {child}
        </Col>
      );
    });

    return <div>{children}</div>;
  },
});

export default AutoCols;
