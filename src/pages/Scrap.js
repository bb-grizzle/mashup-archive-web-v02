import React from 'react';
import {Search,CardList } from 'components';

import firebase from 'lib/firebase-config.js';
const db = firebase.firestore();


class Scrap extends React.Component {
  state = {
    scrapItems : {}
  }

  _getScraps= () => {
    return db.collection("scrapItems").get().
              then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  console.log(doc.id);
                });
              })
  }
  
  _updateState = async () => {
    console.log('_getScraps');
    const scrapItems = await this._getScraps();
    console.log(scrapItems);
  }

  componentDidMount = () => {
    this.props.showHeaderEvent();
    this._updateState();
    // console.log(this._getScraps());
  }

  render() {
    return(
      <div className="Scrap size-header">
        <Search />
        <CardList />
        {/* {this.state.scrapToggle ? <PopupScrap  event={this.handleScrapBtn}/> : ""} */}
      </div>
    )
  }
}

export default Scrap;