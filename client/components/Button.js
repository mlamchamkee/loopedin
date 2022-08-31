import React from 'react';
import { Button } from '@mui/material';

class CreateButton extends React.Component {
  render() {
    console.log('button props', this.props.toggleDialog);
    return (
      <div>
        <button
          type="button" 
          className={this.props.className} 
          onClick={this.props.toggleDialog}>
          {this.props.innerText}
        </button> 
      </div>
      
    );
  }
}

export default Button;