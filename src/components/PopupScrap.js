import React from 'react';
import {ScrapItem} from 'components';

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
      type: ""
    }
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

  handleFormChange = (e) => {
    let newForm = this.state.scrapForm;
    const key = e.target.name;
    const value = e.target.value;
    newForm[key] = value;

    this.setState({
      scrapForm: newForm
    })
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
      {/* <div className="PopupScrap animationOpcity"> */}
        {console.log(this.props.hidePopupScrap)}
        <div className="wrap-popup">
          <div className="popup-contents">
            <h3>scrap</h3>
            <form id="form-scrap" className="form-scrap">
              <ScrapItem title="url" type="url" thumbnail = {this.state.scrapForm.thumbnail} eventChange = {this.handleFormChange}/>
              <ScrapItem title="team" type="check"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="title" type="text"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="description" type="textArea"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="tag" type="tag" scrapType={this.state.scrapForm.type} eventAdd={this.handleTagClicked}/>
            </form>
          </div>
          <div className="popup-btn">
            <p className="btn-scrap-cancle" onClick={this.props.handleAddBtnClick}>취소</p>
            <p className="btn-scrap-text">스크랩</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupScrap;