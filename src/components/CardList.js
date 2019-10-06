import React from 'react';
import Card from './partial/Card';
import {Link} from 'react-router-dom';

const CardList = (props) => {
  return (
    <div className = "CardList">
      <div className = "con-body">
        {props.type ? <h5>{props.type}</h5> : ""}
        {/* <h5>{props.type}</h5> */}

        <div className="wrap-card">
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
        </div>
      </div>
    </div>
  );
}

export default CardList;