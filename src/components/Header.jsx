import React, { useContext, useEffect, useState } from "react";
import logo from "img/logo.svg";
import { Link, NavLink, withRouter } from "react-router-dom";
import { AppContext } from "../shared/App";
import { breakPoint } from "../Utilites";

const Header = withRouter(({ location: { pathname } }) => {
	const { user, nowMedia } = useContext(AppContext);
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const onLinkClicked = (e) => {
		if (nowMedia <= breakPoint.md) {
			setIsMenuClicked((n) => !n);
		}
	};

	useEffect(() => {
		if (nowMedia <= breakPoint.md) {
			setIsMenuClicked(false);
		}
	}, [nowMedia]);

	return (
		<header className={`${false && "header-hide"} ${isMenuClicked && "menuClicked"}`}>
			<div className="con-default con-body">
				<Link to={"/"} className={"logo-header"}>
					<img src={logo} alt="logo" />
				</Link>

				{/* gnb - web */}
				<div className="gnb">
					<div className="header-info">
						<div className="user-info">
							<h3 className="user-team">{user.team}</h3>
							<h4 className="user-name">{user.name}</h4>
						</div>
					</div>

					<nav className="nav-web">
						<ul className={`${isMenuClicked && "menuClicked"}`}>
							<li className={`${pathname === "/" && `active`}`}>
								<NavLink exact to="/" onClick={onLinkClicked}>
									scrap
								</NavLink>
							</li>
							<li className={`${pathname === "/project" && `active`}`}>
								<NavLink to="/project" onClick={onLinkClicked}>
									project
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
});

export default Header;
