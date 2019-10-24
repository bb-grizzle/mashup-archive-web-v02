import React, { Component } from 'react';
import {Route, Switch, Link, withRouter } from 'react-router-dom';
import {Header, Footer, BtnBack, BtnAdd, PopupScrap} from 'components';
import {Home, Scrap, Project, Detail} from 'pages';

import 'normalize.css';
import 'scss/style.scss';

let lastScrollTop = 0;
let didScroll = null;

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
      targetBackBtn: "",
      event: {
        handlePageLocation: this.handlePageLocation,
        handleAddBtnClick: this.handleAddBtnClick
      }
    }
  }

  handleAddBtn = () => {
    if(this.state.page===""||this.state.page==="/"||this.state.page==="/scrap"||this.state.page==="/project"){
      this.setState({hideAddBtn:false})
    }else{
      this.setState({hideAddBtn:true})
    }
  }

  handleAddBtnClick = () => {
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
    // change state page
    const { history } = this.props;

    this.setState({
      page:window.location.pathname,
    });

    this.unlisten = history.listen((location) => {
      this.handleBackBtnTarget(location.pathname);
      this.setState({
        page:location.pathname
      });
    });
  }

  handleBackBtnTarget = (location) => {
    const page = location.split('/')[1];
    let newState = this.state;
    newState.targetBackBtn = page;
    this.setState({
      newState
    })
  }

  renderBtnAdd = () =>{
    if(this.state.page===""||this.state.page==="/"||this.state.page==="/scrap"){
      return <BtnAdd handleAddBtnClick = {this.state.event.handleAddBtnClick}/>
    }else{
      return "";
    }
  }

  renderPopupScrap = () => {
      return <PopupScrap 
              handleAddBtnClick = {this.state.event.handleAddBtnClick} 
              hidePopupScrap = {this.state.hidePopupScrap}
              author = "MashUp"
            />
  }
  
  addScrollEvent = () => {
    window.addEventListener('scroll', () => {
      if(didScroll){
        clearTimeout(didScroll);
      }

      didScroll = setTimeout(() => {
        if(window.location.pathname===""||window.location.pathname==="/" || window.location.pathname === "/scrap" || window.location.pathname === "/project"){
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

  componentDidMount = () => {
    this.handlePageLocation();
    this.addScrollEvent();
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      
      <div className = "App" onScroll={this.handleScroll}>

        <Header hideHeader = {this.state.hideHeader}/>

        {console.log(this.state)}
        <Link to={`/${this.state.targetBackBtn}`}>
          <BtnBack
            hideBackBtn = {this.state.hideBackBtn}
            hideBackBtnEvent = {this.hideBackBtnEvent}
            initBackBtn = {this.state.initBackBtn}

          />
        </Link>

        {this.renderBtnAdd()}
        {this.renderPopupScrap()}

        <div className = "App-contents">
          <Switch>
            <Route exact path = "/" render = {() => <Home event = {this.state.event} showHeaderEvent = {this.showHeaderEvent} hideBackBtn = {this.hideBackBtnEvent}/>}/>
            <Route exact path = "/scrap" render = {()=> <Scrap  event = {this.state.event} showHeaderEvent = {this.showHeaderEvent}/>} />
            <Route path = "/scrap/:id" render = {
              ({match})=> <Detail match = {match} 
                                  initBackBtnEvent = {this.initBackBtnEvent} 
                                  hideHeaderEvent = {this.hideHeaderEvent} 
                                  showBackBtn = {this.showBackBtnEvent}
                                  />} 
                                  
                                  />
            
            <Route exact path = "/project" render = {() => <Project event = {this.state.event} showHeaderEvent = {this.showHeaderEvent} />} />
            <Route path = "/project/:id" render = {({match}) => <Detail match = {match} event = {this.state.event} hideHeaderEvent = {this.hideHeaderEvent}/>} />
          </Switch>
        </div>

        <Footer />
      </div>
     
    );  
  }
}

export default withRouter(App);