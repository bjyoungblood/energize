import React from 'react';

const Card = React.createClass({
  propTypes : {
    title : React.PropTypes.string,
    theme : React.PropTypes.string,
    contentTheme : React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      theme : 'blue-grey darken-1',
      contentTheme : 'white-text',
    };
  },

  renderTitle() {
    if ( ! this.props.title) {
      return null;
    }

    return (
      <span className={'card-title ' + this.props.contentTheme}>
        {this.props.title}
      </span>
    );
  },

  render() {

    return (
      <div className={'card ' + this.props.theme}>
        <div className={'card-content ' + this.props.contentTheme}>
          {this.renderTitle()}
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default Card;
