import React from 'react';
import {Greeting, CardList, BtnAdd} from 'components';

function Home(){
  return(
    <div className="Home size-header">

      <BtnAdd/>
      <Greeting />
      <CardList type = "recent"/>
      <CardList type = "new"/>
      
    </div>
  )
}

export default Home;