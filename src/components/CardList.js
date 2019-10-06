import React from 'react';
import Card from './partial/Card';

const CardList = (props) => {
  return (
    <div className = "CardList">
      <div className = "con-body">
        <h5>{props.type}</h5>

        <div className="wrap-card">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default CardList;