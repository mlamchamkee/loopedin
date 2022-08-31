import React from 'react';
import Iris from './Iris.js';

class OuterIris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedBios: false,
      bios: [],
    };
  }

  componentDidMount() {
    fetch('/bios/')
      .then(res => res.json())
      .then((bios) => {
        if (!Array.isArray(bios)) bios = [];
        return this.setState({
          bios,
          fetchedBios: true
        });
      })
      .catch(err => console.log('OuterIris.componentDidMount: get bios: ERROR: ', err));
  }

  render() {
    const { bios } = this.state;
    const bioElems = [];
    if (this.state.fetchedBios) {
      for (const bio of bios) {
        bioElems.push(<Iris key={bio.chosenName} name={bio.chosenName}/>);
      }
    }

    return (
      <div id="outer-iris" className="outer-iris">
        {bioElems}
      </div>
    );
  }
}

export default OuterIris;
