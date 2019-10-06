import React from 'react';
import {DetailThumbnail, DetailContents} from 'components'

const Detail = ({match})  =>  {
  return (
    <div className = "Detail">
      <DetailThumbnail />
      <DetailContents />
      
    </div>
  );
}

export default Detail;