import React from 'react';
import {DetailThumbnail, DetailContents} from 'components';

class Detail extends React.Component {
  componentDidMount = () => {
    this.props.event.handlePageLocation();
    this.props.hideHeaderEvent();
    this.props.showBackBtn();
    this.props.initBackBtnEvent();
    this.scrolltoTop();
  }

  scrolltoTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className = "Detail">
        <DetailThumbnail />
        <DetailContents />
      </div>
    );
  }
}

export default Detail;