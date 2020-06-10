import React, { useState, useEffect } from "react";
import { ScrapItem } from "components";
import axios from "axios";

// field
const FORMINIT = {
  url: "",
  title: "",
  image: "",
  description: "",
  tag: [],
  type: "",
  created_at: null,
  author: ""
};

const PopupScrap = props => {
  const [form, setForm] = useState(FORMINIT);
  const [tag, setTag] = useState("");
  // add author
  useEffect(() => {
    setForm(n => {
      return {
        ...n,
        author: props.author
      };
    });
  }, []);

  const getHtml = async url => {
    const ogObj = await axios.get(`/api/scrap?url=${url}`);
    setForm(n => {
      return {
        ...n,
        title: ogObj.data.title,
        image: ogObj.data.image,
        description: ogObj.data.description
      };
    });
  };

  const handleCheckClick = () => {
    getHtml(form.url);
  };

  const handleFormChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(form);
    setForm(n => {
      return {
        ...n,
        [key]: value
      };
    });
  };

  const handleImageChange = () => {
    console.log("handleImageChange");
  };

  const handleTagChange = e => {
    setTag(e.target.value);
  };

  const handleAddTag = () => {
    setForm(f => {
      const newArr = f.tag;
      newArr.push(tag);
      return {
        ...f,
        tag: newArr
      };
    });
    setTag("");
  };

  const handleDeleteTag = id => {
    setForm(n => {
      return {
        ...n,
        tag: n.tag.filter((t, index) => index !== id)
      };
    });
  };

  const handleScrap = () => {
    console.log("handleScrap");
    console.log(form);
  };

  const handleCancleClick = () => {
    console.log("handleCancleClick");
    console.log();
    setForm(FORMINIT);
    props.handleAddBtnClick();
  };

  return (
    <div
      className={
        props.hidePopupScrap ? "PopupScrap" : "PopupScrap animationOpcity"
      }
    >
      <div className="wrap-popup">
        <div className="popup-contents">
          <h3> scrap </h3>
          <form id="form-scrap" className="form-scrap">
            <ScrapItem
              title="url"
              type="url"
              thumbnail={form.image}
              eventChange={handleFormChange}
              handleImageChange={handleImageChange}
              handleCheckClick={handleCheckClick}
            />
            <ScrapItem
              title="team"
              type="check"
              eventChange={handleFormChange}
            />
            <ScrapItem
              title="title"
              type="text"
              value={form.title}
              eventChange={handleFormChange}
            />
            <ScrapItem
              title="description"
              type="textArea"
              value={form.description}
              eventChange={handleFormChange}
            />
            <ScrapItem
              title="tag"
              type="tag"
              scrapType={form.type}
              value={tag}
              addTag={handleAddTag}
              deleteTag={handleDeleteTag}
              handleTextChange={handleTagChange}
              tagArr={form.tag}
            />
          </form>
        </div>
        <div className="popup-btn">
          <p className="btn-scrap-cancle" onClick={handleCancleClick}>
            취소
          </p>
          <p className="btn-scrap-text" onClick={handleScrap}>
            스크랩
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupScrap;
