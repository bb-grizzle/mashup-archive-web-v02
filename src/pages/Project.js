import React from 'react';
import {Search, ProjectWrapper } from 'components';


// import firebase from 'lib/firebase-config.js';
// const db = firebase.firestore();

class Project extends React.Component {
  _getProjects = () => {
    // db.collection("projects").get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
  }

  componentDidMount = () => {
    this.props.showHeaderEvent();
    this._getProjects();
  }

  render() {
    return (
      <div className = "Project size-header">
        
        <Search />
        <ProjectWrapper />
        <ProjectWrapper />

      </div>
    );
  }
}

export default Project;