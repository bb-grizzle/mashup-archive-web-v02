import React from 'react';
const Card = () => {
  return (
    <div className = "Card">
      
      <div className = "wrap">
        <div className="contents">
          <div className="wrap-tag">
            <ul className="design">
              <li>tag-01</li>
              <li>tag-02</li>
              <li>tag-03</li>
            </ul>
          </div>

          <div className="wrap-text">
            <p className = "card-title">title</p>
            <p className = "card-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, debitis!</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;