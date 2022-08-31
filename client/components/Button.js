import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={this.props.className} type="button" onClick={this.props.handleClick}>{this.props.innerText}</button> 
      </div>
      
    );
  }
}

export default Button;