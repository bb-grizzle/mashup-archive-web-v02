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
    });
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