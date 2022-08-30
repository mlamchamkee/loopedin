import React from 'react';
import Iris from './Iris.js';

class OuterIris extends React.Component {
  constructor(props) {
    super(props);
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
      .catch(err => console.log('Iris.componentDidMount: get bios: ERROR: ', err));
  }

  render() {
    const { bios } = this.state;
    const bioElems = [];
    for (const b in bios) {
      bioElems.push(<Iris name={b.chosenName}/>);
    }
    return (
      <div className="outer-iris">
        {bioElems}
      </div>
    );
  }
}

export default OuterIris;
