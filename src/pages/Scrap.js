import React from 'react';
import {BtnAdd,Search,CardList,PopupScrap } from 'components';

class Scrap extends React.Component {
  state={
    scrapToggle: false
  }

  handleScrapBtn = () => {

    document.body.classList.toggle("fixScroll");
    let newState = !this.state.scrapToggle;
    this.setState({
      scrapToggle: newState
    }, console.log(this.state))
    console.log("handleScrapBtn");
  }

  render() {
    return(
      <div className="Scrap size-header">
        <BtnAdd event={this.handleScrapBtn}/>
        <Search />
        <CardList />
        {this.state.scrapToggle ? <PopupScrap  event={this.handleScrapBtn}/> : ""}
      </div>
    )
  }
}

export default Scrap;