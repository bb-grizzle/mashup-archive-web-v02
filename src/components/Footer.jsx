import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'img/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className = "con-body">
        <div className="wrap-footer-logo">
          <Link to='/'><img src={logo} alt="logo"></img></Link>
          <div className="wrap-footer-text">
            <p className = "text-copyright">Copyright 2019. Mash Up Group. all rights reserved.</p>
            <div className = "wrap-creater">
              <p className="text-header">Design, Develop by </p>
              <p className="text-contents">grizzle</p>
            </div>
          </div>
        </div>

        <nav className="nav-web">
          <ul>
            <li><Link to="/scrap">scrap</Link></li>
            <li><Link to="/project">project</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;