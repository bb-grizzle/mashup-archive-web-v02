import React from 'react';
import {Search, ProjectWrapper, BtnAdd} from 'components';

const Project = () => {
  return (
    <div className = "Project size-header">
      
      <BtnAdd/>
      <Search />
      <ProjectWrapper />
      <ProjectWrapper />

    </div>
  );
}

export default Project;