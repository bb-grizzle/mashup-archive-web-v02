import React from 'react';
import Card from './partial/Card';
import {Link} from 'react-router-dom';

const CardList = (props) => {

  const renderItems = (props) => {
    console.log("renderItems");
    return props.items.map(el => {
      return <Link to={`/scrap/${el.id}`} key={el.id}><Card item={el}/></Link>
    });
  }

  return (
    <div className = "CardList">
      <div className = "con-body">
        {props.type ? <h5>{props.type}</h5> : ""}
        
        <div className="wrap-card">
          {renderItems(props)}
          {/* <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link>
          <Link to="/scrap/test"><Card/></Link> */}
        </div>
      </div>
    </div>
  );
}



export default CardList;