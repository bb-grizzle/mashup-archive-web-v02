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

  hideBackBtn = () => {
    const btn_back = document.querySelector('.btn-back');

    btn_back.classList.add('hide');
    setTimeout(() => {
      btn_back.classList.add('none');
      btn_back.classList.remove('hide');
      btn_back.classList.remove('show');
    }, 500);
  }

  componentDidMount = () => {
    this.hideBackBtn();
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