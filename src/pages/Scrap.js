import React from 'react';

import {BtnAdd,Search,CardList, Footer } from 'components';

function Scrap(){
  return(
    <div className="Scrap size-header">
      <BtnAdd />
      <Search />
      <CardList />
      <Footer />
    </div>
  )
}

export default Scrap;