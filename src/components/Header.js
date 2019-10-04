import React from 'react';
import logo from 'img/logo.svg';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to = "/" className="logo-header"><img src = {logo} alt = "logo" /></Link>
      <div className = "con-header">
        <div className="header-info">
          <div className="user-info">
            <h3 className="user-team">design</h3>
            <h4 className = "user-name">Taewoong</h4>
          </div>
        </div>

        <nav>
          <ul>
            <li><NavLink to = "/scrap" >scrap</NavLink></li>
            <li><NavLink to = "/project" >project</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;