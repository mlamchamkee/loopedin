import React from 'react';
import { Button } from '@mui/material';

class CreateButton extends React.Component {
  render() {
    const { className, toggleDialog } = this.props;
    console.log('button props', this.props);
    return (
      <div>
        <button
          type="button" 
          className={className} 
          onClick={toggleDialog}>
          Create Profile
        </button> 
      </div>
      
    );
  }
}

export default Button;