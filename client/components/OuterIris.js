import React from 'react';
import Iris from './Iris.js';

class OuterIris extends React.Component {
  constructor(props) {
    super(props);
    this.props.search();
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
