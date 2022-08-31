import React from 'react';

class Modal extends React.Component {
  render() {
    if(this.props.show) {
      return (
        <div>
          Sup
        </div>
      );
    }
  }
}

export default Modal;