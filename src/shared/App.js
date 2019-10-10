import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {Header, Footer, BtnBack, BtnAdd} from 'components'
import {Home, Scrap, Project, Detail} from 'pages';

import 'normalize.css';
import 'scss/style.scss';

class App extends Component {
  state = {
    page: "",
    hideHeader: false,
    hideBackBtn: true,
    initBackBtn: false
  }

  initBackBtnEvent = () => {
    this.setState({
      initBackBtn: true
    })
  }

  hideBackBtnEvent = () => {
    this.setState({
      hideBackBtn: true
    })
  }
  showBackBtnEvent = () => {
    this.setState({
      hideBackBtn: false
    })
  }

  hideHeaderEvent = () => {
    this.setState({
      hideHeader: true
    })
  }

  showHeaderEvent = () => {
    this.setState({
      hideHeader: false
    })
  }

  componentDidMount = () => {
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
            this.setState({
              hideHeader: true
            })
          } else {
            // upscroll code
            this.setState({
              hideHeader: false
            })
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }
      }, 300);
    });
  }

  render() {
    return (
      <div className = "App" onScroll={this.handleScroll}>
        <Header hideHeader = {this.state.hideHeader}/>
        <Link to="/">
          <BtnBack
            hideBackBtn = {this.state.hideBackBtn}
            hideBackBtnEvent = {this.hideBackBtnEvent}
            initBackBtn = {this.state.initBackBtn}
          />
        </Link>


        <BtnAdd />

        <div className = "App-contents">
          <Switch>
            <Route exact path = "/" render = {() => <Home showHeaderEvent = {this.showHeaderEvent} hideBackBtn = {this.hideBackBtnEvent}/>}/>
            <Route exact path = "/scrap" render = {()=> <Scrap showHeaderEvent = {this.showHeaderEvent}/>} />
            <Route path = "/scrap/:id" render = {() => <Detail initBackBtnEvent = {this.initBackBtnEvent} hideHeaderEvent = {this.hideHeaderEvent} showBackBtn = {this.showBackBtnEvent}/>} />
            <Route exact path = "/project" render = {() => <Project showHeaderEvent = {this.showHeaderEvent} />} />
            <Route path = "/project/:id" render = {() => <Detail hideHeaderEvent = {this.hideHeaderEvent}/>} />
          </Switch>
        </div>

        <Footer />
      </div>
     
    );  
  }
}

export default App;