import React from 'react';
import {DetailThumbnail, DetailContents} from 'components';

import firebase from 'lib/firebase-config.js';
const db = firebase.firestore();

class Detail extends React.Component {
  state = {
    page: "",
    id: "",
    collection: "",
    detail: null
  }

  _updatePage = () => {
    const page = this.props.match.path.split('/')[1];
    const id = this.props.match.params.id;
    let collection = "";

    if(page==="scrap"){
      collection="scrapItems";
    }
    
    this.setState({
      ...this.state,
      page: page,
      collection: collection,
      id: id
    })
  }

  scrolltoTop = () => {
    window.scrollTo(0, 0);
  }

  _get = () => {
    console.log('_get');
    const page = this.props.match.path.split('/')[1];
    const id = this.props.match.params.id;
    let collection = "";
    if(page==="scrap"){
      collection="scrapItems";
    }

    const detail = db.collection(collection).doc(id).get()
                  .then(doc => doc.data())
                  .catch(err => console.log(err));

    return detail;
    

  }

  _updateDetail = async () => {
    console.log('_updateDetail');
    const detail = await this._get();
    this.setState({
      ...this.state,
      detail: detail
    })
  }

  _init = () =>{
    this.props.hideHeaderEvent();
    this.props.showBackBtn();
    this.props.initBackBtnEvent();

    this.scrolltoTop();

    this._updatePage();
    this._updateDetail()
  }

  renderDetail = () => {
    return (
      <div>
        <DetailThumbnail thumbnail={this.state.detail.thumbnail}/>
        <DetailContents contents={this.state.detail}/>
      </div>
    )
    
  }

  componentDidMount = () => {
    this._init();
    
  }

  render() {
    return (
      <div className = "Detail">
        {this.state.detail ? this.renderDetail() : "Loading"}
        
      </div>
    );
  }
}

export default Detail;