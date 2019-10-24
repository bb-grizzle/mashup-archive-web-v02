import React from 'react';
import BtnLink from './partial/BtnLink';

const DetailContents = (props) => {
  return (
    <div className = "DetailContents size-thumbnail-height">
      <div className = "wrap-detailContents">
        <div className="con-body design">
          <h2 className="detail-title">{props.contents.title}</h2>
          <p className="detail-descript">{props.contents.description}</p>
          <ul className="detail-tag">
            {props.contents.tag.map((el, index) => {
              return <li key={index}>{`#${el}`}</li>
            })}
          </ul>
          <a rel="noopener noreferrer" href={props.contents.url} target="_blank">
            <BtnLink />
          </a>
          
          <p className="detail-info">Scraped by <span className="detail-author">{props.contents.author}</span></p>
        </div>
      </div>
    </div>
  );
}

export default DetailContents;