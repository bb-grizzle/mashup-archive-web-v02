import React from 'react';
import ic_check from 'img/icon_check.svg';
import ic_img from 'img/icon_img.svg';

const ScrapItem = (props) => {
  
  const renderItem=()=>{
    switch(props.type){
      case "url" :{
        return <div className="wrap-input wrap-input-url">
                <input type="text" placeholder="type url" onChange={props.eventChange} name="url"/>
                <div className = "btn btn-check">
                  <img src = {ic_check} alt = "check"/>
                </div>
                <div className="input-thumbnail">
                  <label htmlFor="file-thumbnail" className="file-thumbnail">
                    <input type="file" id="file-thumbnail" name="thumbnail"/>
                    <img src = {ic_img} alt = "thumbnail" className = {props.thumbnail ? "hide" : ""}/>
                  </label>
                </div>
              </div>;
      }

      case "check": {
        return <div className = "wrap-input wrap-input-check">

                <input type = "radio" name="type" id="radio-design" value = "design" onChange={props.eventChange}/>
                <label htmlFor="radio-design" className="label-radio-design">
                  design
                </label>

                <input type = "radio" name="type"  id="radio-develop"  value = "develop"  onChange={props.eventChange}/>
                <label htmlFor="radio-develop" className="label-radio-develop">
                  develop
                </label>
              </div>
      }

      case "text": {
        return <div className = "wrap-input wrap-input-text">
                <input type = "text" name="title" placeholder="title"  onChange={props.eventChange}/>
              </div>
      }

      case "textArea": {
        return <div className = "wrap-input wrap-input-textArea">
                <textarea rows="4" name="description" placeholder="description" onChange={props.eventChange}/>
              </div>
      }

      case "tag": {
        return <div className = "wrap-input wrap-input-tag">
                <input type="text" name="tag" placeholder="tag" onChange={props.eventChange}/>
                <div className="btn btn-tag" onClick={props.eventAdd}>
                  <div className = "btn-add-contents">
                    <div className="add-v add-line"></div>
                    <div className="add-h add-line"></div>
                  </div>
                </div>
                <ul className = {!props.scrapType ? "wrap-tagList" : props.scrapType==="design" ? "wrap-tagList design" : "wrap-tagList develop"}>
                  
                </ul>
              </div>
      }

      default:{
        return props.type;
      }
    }
  }

  return (
    <div className="ScrapItem">
      <p className="scrapItem-title">{props.title}</p>
      {renderItem()}
      
    </div>
  );
}

export default ScrapItem;