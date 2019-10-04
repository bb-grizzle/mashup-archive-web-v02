import React from 'react';
import BtnAdd from './partial/BtnAdd';

const Greeting = () => {
  return (
    <div className="Greeting">
      <div className = "con-body">
        <h3>Hello!</h3>
        <p>Taewoong, Yoon</p>
        <BtnAdd/>
      </div>
    </div>
  );
}

export default Greeting;