import React from 'react';
import {DetailThumbnail, DetailContents} from 'components'
import BtnBack from 'components/partial/BtnBack';
import {Link} from 'react-router-dom';

const Detail = ({match})  =>  {
  return (
    <div className = "Detail">

      <Link to="/"><BtnBack /></Link>
      <DetailThumbnail />
      <DetailContents />
    </div>
  );
}

export default Detail;