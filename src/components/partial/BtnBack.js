import React from 'react';
import ic_back from 'img/icon_back.svg';
import ic_back_w from 'img/icon_back_w.svg';


const BtnBack = () => {
  return (
    <div className="btn btn-back">
      <img src={ic_back} alt="back" className="ic-back"></img>
      <img src={ic_back_w} alt="back" className="ic-back-w"></img>
    </div>
  );
}

export default BtnBack;