import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import {Home, Scrap, ScrapDetail, Project, ProjectDetail} from 'pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/scrap" component = {Scrap} />
        <Route path = "/scrap/:id" component = {ScrapDetail} />
        <Route exact path = "/project" component = {Project} />
        <Route path = "/project/:id" component = {ProjectDetail} />
        
        
      </Switch>
    );  
  }
}

export default App;