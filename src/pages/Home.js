import React from 'react';
import {Greeting, CardList,Footer} from 'components';

function Home(){
  return(
    <div className="Home">
      <Greeting />
      <CardList />
      <Footer />
    </div>
  )
}

export default Home;