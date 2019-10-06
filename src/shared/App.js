import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header, Footer} from 'components'
import {Home, Scrap, Project, Detail} from 'pages';

import 'normalize.css';
import 'scss/style.scss';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <div className = "App-contents">
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/scrap" component = {Scrap} />
            <Route path = "/scrap/:id" component = {Detail} />
            <Route exact path = "/project" component = {Project} />
            <Route path = "/project/:id" component = {Detail} />
          </Switch>
        </div>

        <Footer />
      </div>
     
    );  
  }
}

export default App;