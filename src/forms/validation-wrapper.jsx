import React from 'react';
import cx from 'classnames';

// @todo Replace with React.cloneElement after upgrade to React 0.13
import cloneWithProps from 'react/lib/cloneWithProps';

/*
 * Expects an <input> as its only child, and will perform
 * the appropriate transformations to energize it!
 */
const ValidationWrapper = React.createClass({

  propTypes : {
    validate : React.PropTypes.func.isRequired,
    children : React.PropTypes.element.isRequired,
    wrapperClassName : React.PropTypes.string,
    labelClassName : React.PropTypes.string,
    inputClassName : React.PropTypes.string,
    onFocus : React.PropTypes.func,
    onBlur : React.PropTypes.func,
  },

  getInitialState() {
    let child = React.Children.only(this.props.children);
    const value = child.props.value || child.props.defaultValue;

    return {
      isValid : this.props.validate(value),
      value : value,
      focused : Boolean(child.props.value || child.props.defaultValue),
    };
  },

  onFocus() {
    this.setState({ focused : true });
  },

  onBlur() {
    this.setState({ focused : false });
  },

  onChange(event) {
    let value = event.currentTarget.value;
    this.setState({
      isValid : this.props.validate(value),
      value : value,
    });
  },

  wrapperClasses() {
    return cx(this.props.wrapperClassName);
  },

  labelClassName() {
    if (this.state.isValid){
      return cx(this.props.labelClassName);
    } else {
      return cx(this.props.labelClassName, 'invalid');
    }
  },

  inputClassName() {
    if (this.state.isValid){
      return cx(this.props.inputClassName);
    } else {
      return cx(this.props.inputClassName, 'invalid');
    }
  },

  render() {
    let child = React.Children.only(this.props.children);

    let newProps = {
      onFocus : this.onFocus,
      onBlur : this.onBlur,
      onChange : this.onChange,
      labelClassName : this.labelClassName(),
      inputClassName : this.inputClassName(),
    };

    let newChild = cloneWithProps(child, newProps);

    return (
      <div className={this.wrapperClasses()}>
        {newChild}
      </div>
    );
  },

});

export default ValidationWrapper;
