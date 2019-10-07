import React from 'react';
import logo from 'img/logo.svg';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {
  state = {
    menu: false,
    nowpage: "/"
  }

  toggleMenu = () => {
    const newMenu = !this.state.menu;
    this.setState({
      menu: newMenu
    })
  }

  changeNowPage = (e) => {
    let nowpage = e.target.innerHTML;
    if(nowpage === "home"){
      nowpage = "/"
    }

    this.setState({
      nowpage: nowpage
    })
  }

  handleLogoClick = () => {
    this.toggleMenu();
  }

  handleMenuClick = (e) => {
    this.toggleMenu();
    this.changeNowPage(e);
  }


  render() {
    return (
      <header>
        <Link to = {window.innerWidth > 576 ? "/" : this.state.nowpage} className={this.state.menu ? "logo-header menu-active" : "logo-header"} onClick = {this.handleLogoClick}><img src = {logo} alt = "logo" /></Link>

        <div className = "con-default">
          {/* gnb - web */}
          <div className = "gnb">
            <div className="header-info">
              <div className="user-info">
                <h3 className="user-team">design</h3>
                <h4 className = "user-name">Taewoong</h4>
              </div>
            </div>

            <nav className="nav-web">
              <ul>
                <li>
                  <NavLink to = "/scrap" >scrap</NavLink>
                </li>
                <li><NavLink to = "/project" >project</NavLink></li>
              </ul>
            </nav>
          </div>

          {/* gnb - movile */}
          <nav className={this.state.menu ? "nav-mobile nav-mobile-active" : "nav-mobile"}>
            <ul>
              <li><NavLink exact to = "/" onClick = {this.handleMenuClick} >home</NavLink></li>
              <li><NavLink to = "/scrap"  onClick = {this.handleMenuClick} >scrap</NavLink></li>
              <li><NavLink to = "/project"  onClick = {this.handleMenuClick} >project</NavLink></li>
            </ul>
          </nav>
        </div>

        
      </header>
    );
  }
}

export default Header;