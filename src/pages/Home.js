import React from 'react';
import {Greeting, CardList,Footer} from 'components';

function Home(){
  return(
    <div className="Home size-header">
      <Greeting />

      <CardList type = "recent"/>
      <CardList type = "new"/>
      
      <Footer />
    </div>
  )
}

export default Home;