import React from 'react';

class Button extends React.Component {
  render() {
    const { isSelected = true } = this.props;
    const type = isSelected ? 'primary' : 'outline-secondary';
    return (
      <button
        className={`btn btn-${type}`}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;