import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {Header, Footer, BtnBack, BtnAdd, PopupScrap} from 'components';
import {Home, Scrap, Project, Detail} from 'pages';

import 'normalize.css';
import 'scss/style.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: "",
      hideHeader: false,
      hideBackBtn: true,
      initBackBtn: false,
      hideAddBtn: false,
      hidePopupScrap: true,
      event: {
        handlePageLocation: this.handlePageLocation,
        handleAddBtnClick: this.handleAddBtnClick
      }
    }
  }

  handleAddBtn = () => {
    // this.state.event
    if(this.state.page==="/"||this.state.page==="/scrap"||this.state.page==="/project"){
      this.setState({hideAddBtn:true})
    }
  }

  handleAddBtnClick = () => {
    console.log("handleAddBtnClick")
    this.setState(prevState => ({hidePopupScrap: !prevState.hidePopupScrap}));
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

  handlePageLocation = () => {
    const path = window.location.pathname;
    this.setState({
      page:path
    });
  }

  componentDidMount = () => {
    this.handlePageLocation();
    this.handleAddBtn();

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

        {this.state.hideAddBtn ? "" : <BtnAdd handleAddBtnClick = {this.state.event.handleAddBtnClick}/>}
        {!this.state.hideAddBtn && !this.state.hidePopupScrap ? <PopupScrap handleAddBtnClick = {this.state.event.handleAddBtnClick}/> : ""}
        

        <div className = "App-contents">
          <Switch>
            <Route exact path = "/" render = {() => <Home event = {this.state.event} showHeaderEvent = {this.showHeaderEvent} hideBackBtn = {this.hideBackBtnEvent}/>}/>
            <Route exact path = "/scrap" render = {()=> <Scrap  event = {this.state.event} showHeaderEvent = {this.showHeaderEvent}/>} />
            <Route path = "/scrap/:id" render = {() => <Detail  event = {this.state.event} initBackBtnEvent = {this.initBackBtnEvent} hideHeaderEvent = {this.hideHeaderEvent} showBackBtn = {this.showBackBtnEvent}/>} />
            <Route exact path = "/project" render = {() => <Project  event = {this.state.event} showHeaderEvent = {this.showHeaderEvent} />} />
            <Route path = "/project/:id" render = {() => <Detail  event = {this.state.event} hideHeaderEvent = {this.hideHeaderEvent}/>} />
          </Switch>
        </div>

        <Footer />
      </div>
     
    );  
  }
}

export default App;