import React from 'react';
import {Search,CardList } from 'components';
import firebase from 'lib/firebase-config.js';

const db = firebase.firestore();

class Scrap extends React.Component {
  state = {
    scrapItems : null,
    scrapCount: 0
  }

  _getScraps= () => {
    const data = db.collection("scrapItems").orderBy("created_at","desc").get()
      .then(querySnapshot => {
        const scrapItems_raw = querySnapshot.docs;
        return scrapItems_raw;
      })
    return data;
  }

  updateScrapToState = () =>{
    console.log('f) updateScrapToState');
    db.collection("scrapItems").orderBy("created_at","desc")
      .onSnapshot(querySnapshot =>  {
        this.setState({
          ...this.state,
          scrapItems: querySnapshot.docs
        })
      });
  }
  
  _updateState = async () => {
    console.log('_getScraps');
    const scrapItems_fb = await this._getScraps();
    this.setState({
      scrapItems: scrapItems_fb,
      scrapCount: scrapItems_fb.length
    })
  }

  componentDidMount = () => {
    this.props.showHeaderEvent();
    this._updateState();
    this.updateScrapToState();
  }

  render() {
    return(
      <div className="Scrap size-header">
        <Search />
        {this.state.scrapItems ? <CardList items = {this.state.scrapItems}/> : ""}
        
      </div>
    )
  }
}

export default Scrap;