import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header, Footer} from 'components'
import {Home, Scrap, Project, Detail} from 'pages';

import 'normalize.css';
import 'scss/style.scss';

class App extends Component {
  state = {
    page: ""
  }

  detectPage = () => {
    console.log("detectPage");
  }

  componentDidMount = () => {
    // this.handleScroll();
    let lastScrollTop = 0;
    let didScroll = null; 
    
    window.addEventListener('scroll', () => {
      if(didScroll){
        clearTimeout(didScroll);
      }

      didScroll = setTimeout(() => {

        if(window.location.pathname==="/" || window.location.pathname === "/scrap" || window.location.pathname === "/project"){
          // event
          const st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop){
            // downscroll code
            document.querySelector('header').classList.add('header-hide');
          } else {
            // upscroll code
            document.querySelector('header').classList.remove('header-hide');
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }

      }, 100);

    });
  }

  render() {
    return (
      <div className = "App" onScroll={this.handleScroll}>
        <Header />
        <div className = "App-contents">
          <Switch>
            <Route exact path = "/" component = {Home}/>
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