import React from 'react';
import cx from 'classnames';

// @todo Replace with React.cloneElement after upgrade to React 0.13
import cloneWithProps from 'react/lib/cloneWithProps';

// used when inputs do not have their id specified
let id = 1;

/*
 * Expects an <input> as its only child, and will perform
 * the appropriate transformations to energize it!
 */
const InputWrapper = React.createClass({

  propTypes : {
    label : React.PropTypes.string.isRequired,
    children : React.PropTypes.element.isRequired,
    wrapperClassName : React.PropTypes.string,
    labelClassName : React.PropTypes.string,
    onFocus : React.PropTypes.func,
    onBlur : React.PropTypes.func,
  },

  getInitialState() {
    return {
      focused : false,
    };
  },

  id : null,

  componentWillMount() {
    if (! this.id) {
      this.id = id;
      id += 1;
    }
  },

  onFocus() {
    this.setState({ focused : true });
  },

  onBlur() {
    this.setState({ focused : false });
  },

  labelClasses() {
    return cx(this.props.labelClassName, {
      active : this.state.focused,
    });
  },

  wrapperClasses() {
    return cx(this.props.wrapperClassesName, 'input-field');
  },

  render() {
    let child = React.Children.only(this.props.children);

    let labelFor;
    let newProps = {
      onFocus : this.onFocus,
      onBlur : this.onBlur,
    };

    if (child.props.id) {
      labelFor = child.props.id;
    } else {
      newProps.id = `energize-input-${this.id}`;
      labelFor = newProps.id;
    }

    let newChild = cloneWithProps(child, newProps);

    return (
      <div className={this.wrapperClasses()}>
        {newChild}
        <label htmlFor={labelFor} className={this.labelClasses()}>{this.props.label}</label>
      </div>
    );
  }

});

export default InputWrapper;
