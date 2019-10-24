import React from 'react';
import ic_check from 'img/icon_check.svg';
import ic_img from 'img/icon_img.svg';

class ScrapItem extends React.Component {
  state ={
    tag: ""
  }

  tagOnChange = (e) => {
    this.setState({
      tag: e.target
    })
  }
  
  handleTagSubmit = (e) => {
    if (e.which === 13 || e.keyCode === 13 || e.which === 32 || e.keyCode===32) {
      // 태그를 폼 안에 넣는다.
      this.props.event.addTag(e.target);
    }
  }

  handleTagClick = () => {
    this.props.event.addTag(this.state.tag);
  }
  
  renderItem=()=>{
    // props.img_thumbnail.result
    switch(this.props.type){
      case "url" :{
        const label_style = {
          backgroundImage: this.props.thumbnail ? `url(${this.props.thumbnail})` : ""
        }
        return <div className="wrap-input wrap-input-url">
                <input type="text" placeholder="type url" onChange={this.props.eventChange} name="url"/>
                <div className = "btn btn-check">
                  <img src = {ic_check} alt = "check"/>
                </div>
                <div className="input-thumbnail" style = {label_style}>
                  <label htmlFor="file-thumbnail" className={`file-thumbnail`}>
                    <input type="file" id="file-thumbnail" name="thumbnail" onChange={this.props.handleImageChange}/>
                    <img src = {ic_img} alt = "thumbnail" className = {this.props.thumbnail ? "hide" : ""}/>
                  </label>
                </div>
              </div>;
      }

      case "check": {
        return <div className = "wrap-input wrap-input-check">

                <input type = "radio" name="type" id="radio-design" value = "design" onChange={this.props.eventChange}/>
                <label htmlFor="radio-design" className="label-radio-design">
                  design
                </label>

                <input type = "radio" name="type"  id="radio-develop"  value = "develop"  onChange={this.props.eventChange}/>
                <label htmlFor="radio-develop" className="label-radio-develop">
                  develop
                </label>
              </div>
      }

      case "text": {
        return <div className = "wrap-input wrap-input-text">
                <input type = "text" name="title" placeholder="title"  onChange={this.props.eventChange}/>
              </div>
      }

      case "textArea": {
        return <div className = "wrap-input wrap-input-textArea">
                <textarea rows="4" name="description" placeholder="description" onChange={this.props.eventChange}/>
              </div>
      }

      case "tag": {
        return <div className = "wrap-input wrap-input-tag">
                <input 
                  type="text" name="tag" placeholder="tag" disabled={this.props.tagArr.length===4 ? true : false}
                  onChange={this.tagOnChange} 
                  onKeyPress={this.handleTagSubmit}/>

                <div className="btn btn-tag" onClick={this.handleTagClick}>
                  <div className = "btn-add-contents">
                    <div className="add-v add-line"></div>
                    <div className="add-h add-line"></div>
                  </div>
                </div>

                <ul className = {!this.props.scrapType ? "wrap-tagList" : this.props.scrapType==="design" ? "wrap-tagList design" : "wrap-tagList develop"}>
                  
                  {this.props.tagArr.map((el,index) => {
                    return <li key={index} onClick={this.props.event.deleteTag}>{el}</li>
                  })}
                </ul>
              </div>
      }

      default:{
        return this.props.type;
      }
    }
  }

  render(){
    return (
      <div className="ScrapItem">
        <p className="scrapItem-title">{this.props.title}</p>
        {this.renderItem()}
        
      </div>
    );
  }
}

export default ScrapItem;