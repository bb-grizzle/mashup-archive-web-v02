import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from 'components'
import {Home, Scrap, ScrapDetail, Project, ProjectDetail} from 'pages';

import 'normalize.css';
import 'scss/style.scss';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/scrap" component = {Scrap} />
          <Route path = "/scrap/:id" component = {ScrapDetail} />
          <Route exact path = "/project" component = {Project} />
          <Route path = "/project/:id" component = {ProjectDetail} />
        </Switch>
      </div>
     
    );  
  }
}

export default App;