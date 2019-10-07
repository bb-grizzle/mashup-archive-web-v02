import React from 'react';
import {DetailThumbnail, DetailContents} from 'components'
import BtnBack from 'components/partial/BtnBack';
import {Link} from 'react-router-dom';

class Detail extends React.Component {
  componentDidMount = () => {
    this.hideHeader();
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

        <Link to="/"><BtnBack /></Link>
        <DetailThumbnail />
        <DetailContents />
      </div>
    );
  }
}

export default Detail;