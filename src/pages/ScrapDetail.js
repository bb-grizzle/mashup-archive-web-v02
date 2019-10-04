import React from 'react';

function ScrapDetail({match}){
  return(
    <div className="ScrapDetail">
      ScrapDetail - {match.params.id}
    </div>
  )
}

export default ScrapDetail;