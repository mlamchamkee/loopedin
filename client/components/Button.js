import React from 'react';

class Button extends React.Component {
  render() {
    console.log('button props', this.props.handleClick);
    return (
      <div>
        <button 
          className={this.props.className} 
          onClick={this.props.handleClick}>
          {this.props.innerText}
        </button> 
      </div>
      
    );
  }
}

export default Button;