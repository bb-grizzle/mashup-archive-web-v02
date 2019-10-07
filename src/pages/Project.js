import React from 'react';
import {Search, ProjectWrapper, BtnAdd,PopupScrap} from 'components';

class Project extends React.Component {
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
    return (
      <div className = "Project size-header">
        
        <BtnAdd event={this.handleScrapBtn}/>
        <Search />
        <ProjectWrapper />
        <ProjectWrapper />
        {this.state.scrapToggle ? <PopupScrap  event={this.handleScrapBtn}/> : ""}

      </div>
    );
  }
}

export default Project;