import React from 'react';

const DetailThumbnail = (props) => {
  const style_thumbnail = {
    backgroundImage : `url(${props.thumbnail})`
  }
  
  return (
    <div className = "DetailThumbnail">
      <div className = "thumbnail" style={style_thumbnail}>

      </div>
    </div>
  );
}

export default DetailThumbnail;