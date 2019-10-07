import React from 'react';
import {DetailThumbnail, DetailContents} from 'components';

class Detail extends React.Component {
  componentDidMount = () => {
    this.hideHeader();
    this.showBackBtn();
  }

  showBackBtn = () => {
    const btn_back = document.querySelector('.btn-back');
    btn_back.classList.remove('none');
    setTimeout(() => {
      btn_back.classList.add('show');
    }, 500);
    console.log(btn_back);
  }

  hideHeader = () => {
    const header = document.querySelector('header');
    console.log(header.classList.contains('header-hide'));
    if(!header.classList.contains('header-hide')){
      header.classList.add('header-hide');
    }else{
      return;
    }
  }

  render() {
    return (
      <div className = "Detail">

        {/* <Link to="/"><BtnBack /></Link> */}
        <DetailThumbnail />
        <DetailContents />
      </div>
    );
  }
}

export default Detail;