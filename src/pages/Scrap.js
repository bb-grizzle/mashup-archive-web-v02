import React from 'react';
import {Search,CardList } from 'components';

class Scrap extends React.Component {
  

  // handleScrapBtn = () => {
  //   document.body.classList.toggle("fixScroll");
  //   let newState = !this.state.scrapToggle;
  //   this.setState({
  //     scrapToggle: newState
  //   })
  // }

  componentDidMount = () => {
    this.props.event.handlePageLocation();
    this.props.showHeaderEvent();
  }

  render() {
    return(
      <div className="Scrap size-header">
        <Search />
        <CardList />
        {/* {this.state.scrapToggle ? <PopupScrap  event={this.handleScrapBtn}/> : ""} */}
      </div>
    )
  }
}

export default Scrap;