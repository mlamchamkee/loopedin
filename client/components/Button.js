import React from 'react';

class Button extends React.Component {
  render() {
    console.log('button props', this.props.toggleModal);
    return (
      <div>
        <button 
          className={this.props.className} 
          onClick={this.props.toggleModal}>
          {this.props.innerText}
        </button> 
      </div>
      
    );
  }
}

export default Button;