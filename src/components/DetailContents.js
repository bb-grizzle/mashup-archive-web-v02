import React from 'react';
import BtnLink from './partial/BtnLink';
import BtnBack from './partial/BtnBack';
import {Link} from 'react-router-dom';

const DetailContents = () => {
  return (
    <div className = "DetailContents size-thumbnail-height">
      <div className = "wrap-detailContents">
        <div className="con-body design">
          <Link to="/"><BtnBack /></Link>
          <h2 className="detail-title">title</h2>
          <p className="detail-descript">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it to make a type specimen book.</p>
          <ul className="detail-tag">
            <li>tag01</li>
            <li>tag02</li>
            <li>tag03</li>
          </ul>
          <Link to="/"><BtnLink /></Link>
          
          <p className="detail-info">Scraped by <span className="detail-author">Taewoong</span></p>
        </div>
      </div>
    </div>
  );
}

export default DetailContents;