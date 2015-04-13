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
    inputClassName : React.PropTypes.string,
    onChange : React.PropTypes.func,
    onFocus : React.PropTypes.func,
    onBlur : React.PropTypes.func,
  },

  getInitialState() {
    let child = React.Children.only(this.props.children);

    return {
      value : child.props.value || child.props.defaultValue,
      focused : Boolean(child.props.value || child.props.defaultValue),
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

  onChange(oldHandler, event) {
    this.setState({ value : event.currentTarget.value });

    if (oldHandler) {
      oldHandler(event);
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  },

  labelClasses(inputType) {
    switch (inputType) {
      case 'date':
        return cx(this.props.labelClassName, 'active');
      case 'checkbox':
      case 'radio':
        return cx(this.props.labelClassName);
      case '':
        return cx(this.props.labelClassName);
      default:
        return cx(
          this.props.labelClassName,
          { active : this.state.focused || Boolean(this.state.value) }
        );
    }
  },

  wrapperClasses() {
    return cx(this.props.wrapperClassName, 'input-field');
  },

  inputClasses(oldClassName) {
    return cx(oldClassName || '', this.props.inputClassName);
  },

  render() {
    let child = React.Children.only(this.props.children);

    let labelFor;
    let newProps = {
      onFocus : this.onFocus,
      onBlur : this.onBlur,
      className : this.inputClasses(child.props.className),
    };

    if (child.props.id) {
      labelFor = child.props.id;
    } else {
      newProps.id = `energize-input-${this.id}`;
      labelFor = newProps.id;
    }

    if (child.props.onChange) {
      newProps.onChange = this.onChange.bind(this, child.props.onChange);
    } else {
      newProps.onChange = this.onChange.bind(this, null);
    }

    let newChild = cloneWithProps(child, newProps);

    return (
      <div className={this.wrapperClasses()}>
        {newChild}
        <label htmlFor={labelFor}
               className={this.labelClasses(child.props.type)}>
          {this.props.label}
        </label>
      </div>
    );
  },

});

export default InputWrapper;
