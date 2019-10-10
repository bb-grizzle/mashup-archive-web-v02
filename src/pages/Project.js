import React from 'react';
import {Search, ProjectWrapper, BtnAdd } from 'components';

class Project extends React.Component {
  componentDidMount = () => {
    this.props.showHeaderEvent();
  }

  render() {
    return (
      <div className = "Project size-header">
        
        <BtnAdd event={this.handleScrapBtn}/>
        <Search />
        <ProjectWrapper />
        <ProjectWrapper />

      </div>
    );
  }
}

export default Project;