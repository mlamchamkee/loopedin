import React from 'react';
import Iris from './Iris.js';

class OuterIris extends React.Component {
  // componentDidMount() {
  // fetch('/bios/')
  //   .then(res => res.json())
  //   .then((bios) => {
  //     if (!Array.isArray(bios)) bios = [];
  //     return this.setState({
  //       bios,
  //       fetchedBios: true
  //     });
  //   })
  //   .catch(err => console.log('OuterIris.componentDidMount: get bios: ERROR: ', err));
  // }

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { bios } = this.props;
    const bioElems = [];
    console.log('OuterIris Bios', bios);
    if (bios) {
      for (const bio of bios) {
        bioElems.push(<Iris key={bio.gitHub} name={bio.fullName}/>);
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
