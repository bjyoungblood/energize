# Energize

React components (plus some styles) for Materialize CSS

## Style Guide

### JavaScript

- Use ES6 features wherever possible, but avoid anything that requires `es6-shim` (`Map`, `Set`)
- No jQuery or other large external dependencies
- No direct DOM manipulation

### Component State

UI components should strive to be as stateless as possible. However, there cases
where this is not possible or desirable.

Any time we provide a stateful component, we should allow it to operate in
"controlled" and "uncontrolled" mode, similar to how React handles form inputs.

We should always allow the user to provide one or more `onChange` (or similar)
handlers as props. The component may perform any internal state bookkeeping
whether or not change handlers are provided. If a change handler is provided, we
should pass back any relevant events unchanged, along with any relevant data.
If no change handlers are provided, we should `preventDefault` on any triggered
events.

If a `value` prop (or whatever is appropriate for the component) is provided, then
the component should defer to the given value instead of using its internal state.
When a `value` prop is not provided, the component should track state internally.

### Sass

- Align property values on adjacent lines
- Use [`scss-lint`](https://github.com/causes/scss-lint)
- Avoid changing Materialize styles wherever possible in order to maintain forward-compatibility

#### Class names

```javascript
import cx from 'classnames';

const SpecialDiv = React.createClass({
  render() {
    // any classes we want to apply should come last so they override anything
    // set in this.props.className
    let classes = cx(this.props.className, 'top-nav');

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});
```
