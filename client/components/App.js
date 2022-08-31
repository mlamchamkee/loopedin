import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {showModal: true};
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log('Im running up that hill');
    if (this.state.showModal) this.setState({showModal: false});
    else this.setState({showModal: true});
  }

  render() {
    return (
      <div>
        <MainContainer id="main-container" toggleModal={this.toggleModal}/>
        <Form id="modal" show={this.state.showModal}/>
      </div>
    );        
  }
}

export default App;