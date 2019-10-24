import React from 'react';
import {ScrapItem} from 'components';

import firebase from 'lib/firebase-config.js';
const db = firebase.firestore();

// const request = require('request');
// const cheerio = require('cheerio');

class PopupScrap extends React.Component {
  state = {
    scrapForm: {
      url:"",
      title: "",
      thumbnail: "",
      description: "",
      tag: [],
      type: "",
      created_at: null
    },
    data_id: "",
    thumbnail_upload: null,
    thumbnail_URL: ""
  }

  getHtml = () => {
    // 서버에서 브라우져를 거치지 않고 내용을 가져올 수 있어야 한다. 
    // 제일 마지막에 작업하기.
    // console.log("getHTML");
    // let title = "";
    // let description = "";
    // let image = "";

    // request('https://www.naver.com/', (error, response, html) => {
    // if (!error && response.statusCode === 200) {
    //     const $ = cheerio.load(html);

    //     $('meta').map((i, el) => {
    //         const promp = $(el).attr('property');
    //         if (promp === 'og:title') {
    //             title = $(el).attr('content');
    //         } else if (promp === 'og:description') {
    //             description = $(el).attr('content');
    //         } else if (promp === 'og:image') {
    //             image = $(el).attr('content');
    //         }
    //     });

    //     console.log(title);
    //     console.log(description);
    //     console.log(image);

    //   }
    // })

  };

  handleScrap = (user_form) => () =>{
    this._postScrap(user_form);
  }

  handleUploadThumbnail = () => {
    console.log('handleUploadThumbnail');
    if(this.state.thumbnail_upload){
      this._postScrapThumbnail();
    }
  }

  _postScrapThumbnail = () => {
    console.log('_postScrapThumbnail');
    // 업로드 이미지로 할지, 링크로 가져올지
    var storageRef = firebase.storage().ref(`/scrap/${this.state.data_id}`);
    storageRef.put(this.state.thumbnail_upload).then(snapshot => {
      console.log('Uploaded a blob or file!');
    })
    .then(res => this._makeScrapDbURL());
  }

  _makeScrapDbURL = () => {
    console.log('_fixScrapDB');
    firebase.storage().ref(`/scrap/${this.state.data_id}`).getDownloadURL().then(url => {
      this.setState({
        thumbnail_URL: url
      })
    })
    .then(res => this._fixDBthumbnail())
    .catch(err => {
      console.log(err);
    });
  }

  _fixDBthumbnail = () => {
    console.log('_fixDBthumbnail');
    var scrapItem = db.collection("scrapItems").doc(this.state.data_id);
    scrapItem.update({
      thumbnail: this.state.thumbnail_URL
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

  }


  _postScrap = (form) => {
    // : post form to firebase
    console.log('_postScrap');
    const props = this.props;
    const nowDate = firebase.firestore.FieldValue.serverTimestamp();
    form["created_at"] = nowDate;

    // add field
    db.collection('scrapItems').add(form)
      .then(docRef => {
        this.setState({
          ...this.state,
          data_id: docRef.id
        })
        props.handleAddBtnClick();
      })
      .then(res => this.handleUploadThumbnail())

      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  handleFormChange = (e) => {
    let newForm = this.state.scrapForm;
    const key = e.target.name;
    const value = e.target.value;
    newForm[key] = value;

    this.setState({
      scrapForm: newForm
    })
  }

  handleImageChange = (e) => {
    console.log('handleImageChange');

    const newFile = e.target.files[0];
    if (!e.target.files[0].type.match(/image\//)) return;

    var readerContents = new FileReader();
    readerContents.readAsDataURL(newFile);

    readerContents.onload = () => {
      this.setState({
        scrapForm:{
          ...this.state.scrapForm,
          thumbnail: readerContents.result
        },
        thumbnail_upload: newFile
      })
    }
  }

  handleTagClicked = () => {
    this.addTagtoState();
  }
  
  addTagtoState = () => {
    const scrapForm = document.querySelector('#form-scrap');
    const scrapTag = scrapForm.tag;

    let newForm = this.state.scrapForm;
    let newTag = newForm.tag;
    newTag.push(scrapTag.value);

    // add li tag
    const wrap_tagList= document.querySelector('.wrap-tagList');
    const li_temp = document.createElement('li');
    li_temp.innerHTML = scrapTag.value;
    wrap_tagList.appendChild(li_temp);
    
    scrapTag.value = "";
    newForm["tag"] = newTag;

    this.setState({
      scrapForm: newForm
    })
  }

  componentDidMount = () => {
    
  }

  render(props) {
    return (
      <div className={this.props.hidePopupScrap ? "PopupScrap" : "PopupScrap animationOpcity"}>
        <div className="wrap-popup">
          <div className="popup-contents">
            <h3>scrap</h3>
            <form id="form-scrap" className="form-scrap">
              <ScrapItem title="url" type="url" thumbnail = {this.state.scrapForm.thumbnail} eventChange = {this.handleFormChange} handleImageChange = {this.handleImageChange} thumbnail={this.state.scrapForm.thumbnail}/>
              <ScrapItem title="team" type="check"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="title" type="text"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="description" type="textArea"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="tag" type="tag" scrapType={this.state.scrapForm.type} eventAdd={this.handleTagClicked}/>
            </form>
          </div>
          <div className="popup-btn">
            <p className="btn-scrap-cancle" onClick={this.props.handleAddBtnClick}>취소</p>
            <p className="btn-scrap-text" onClick = {this.handleScrap(this.state.scrapForm)}>스크랩</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupScrap;