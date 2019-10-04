import React from 'react';

const ProjectDetail = ({match})  =>  {
  return (
    <div className = "ProjectDetail">
      Project Detail - {match.params.id}
    </div>
  );
}

export default ProjectDetail;