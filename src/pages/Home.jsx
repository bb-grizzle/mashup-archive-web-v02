import React from 'react';
import {Greeting, CardList } from 'components';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.showHeaderEvent();
  }

  render() {
    return(
      <div className="Home size-header">
        <Greeting />
        <CardList type = "recent"/>
        <CardList type = "new"/>
      </div>
    )
  }
}

export default Home;