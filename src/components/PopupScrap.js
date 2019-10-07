import React from 'react';
import {ScrapItem} from 'components';

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

  render(props) {
    return (
      <div className="PopupScrap">
        <div className="wrap-popup">
          <div className="popup-contents">
            <h3>scrap</h3>
            <form id="form-scrap">
              <ScrapItem title="url" type="url" thumbnail = {this.state.scrapForm.thumbnail} eventChange = {this.handleFormChange}/>
              <ScrapItem title="team" type="check"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="title" type="text"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="description" type="textArea"  eventChange = {this.handleFormChange}/>
              <ScrapItem title="tag" type="tag" scrapType={this.state.scrapForm.type} eventAdd={this.handleTagClicked}/>
            </form>
          </div>
          <div className="popup-btn">
            <p  className="btn-scrap-cancle" onClick={this.props.event}>취소</p>
            <p className="btn-scrap-text">스크랩</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupScrap;