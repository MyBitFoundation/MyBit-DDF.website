import { Component } from 'react';

class ButtonSubscribe extends Component {
  render () {
    return (
      <span
        className={this.props.className}
        onClick={this.props.handleClick}
      >
        Subscribe
      </span>
    )
  }
}

export default ButtonSubscribe;
