import React from 'react';
import {Greeting, CardList, BtnAdd, PopupScrap} from 'components';

class Home extends React.Component {
  state={
    scrapToggle: false
  }

  showHeader = () => {
    document.querySelector('header').classList.remove('header-hide');
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

  handleScrapBtn = () => {
    document.body.classList.toggle("fixScroll");
    let newState = !this.state.scrapToggle;
    this.setState({
      scrapToggle: newState
    })
  }

  componentDidMount = () => {
    this.showHeader();
    this.hideBackBtn();
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