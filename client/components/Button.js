import React from 'react';

class Button extends React.Component {
  render() {
    console.log('button props', this.props.toggleDialog);
    return (
      <div>
        <button 
          className={this.props.className} 
          onClick={this.props.toggleDialog}>
          {this.props.innerText}
        </button> 
      </div>
      
    );
  }
}

export default Button;