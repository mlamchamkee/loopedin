import React from 'react';

class CreateButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, toggleDialog } = this.props;
    // console.log('button props', this.props);
    return (
      <form onSubmit={toggleDialog}>
        <input
          id="create-button"
          type="submit" 
          className={className}
          value="Create Profile"
        >
          {/* onClick={toggleDialog}> */}
        </input> 
      </form>
      
    );
  }
}

export default CreateButton;