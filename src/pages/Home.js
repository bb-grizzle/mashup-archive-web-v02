import React from 'react';
import {Greeting, CardList, BtnAdd, PopupScrap} from 'components';

class Home extends React.Component {
  state={
    scrapToggle: false
  }

  showHeader = () => {
    document.querySelector('header').classList.remove('header-hide');
  }

  handleScrapBtn = () => {
    document.body.classList.toggle("fixScroll");
    let newState = !this.state.scrapToggle;
    this.setState({
      scrapToggle: newState
    })
  }

  componentDidMount = () => {
    this.showHeader();
  }

  render() {
    return(
      <div className="Home size-header">

        <BtnAdd event={this.handleScrapBtn}/>
        <Greeting />
        <CardList type = "recent"/>
        <CardList type = "new"/>
        {this.state.scrapToggle ? <PopupScrap event={this.handleScrapBtn}/> : ""}
        
      </div>
    )
  }
}

export default Home;