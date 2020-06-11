import React, { useState, useEffect } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { Header, Footer, BtnBack, BtnAdd, PopupScrap } from "components";
import { Home, Scrap, Project, Detail, NotFound } from "pages";

import "normalize.css";
import "scss/style.scss";

let lastScrollTop = 0;
let didScroll = null;

const App = (props) => {
	const [page, setPage] = useState();
	const [hideHeader, setHideHeader] = useState(false);
	const [hideBackBtn, setHideBackBtn] = useState(true);
	const [initBackBtn, setInitBackBtn] = useState(false);
	const [hideAddBtn, setHideAddBtn] = useState(false);
	const [hidePopupScrap, setHidePopupScrap] = useState(true);
	const [targetBackBtn, setTargetBackBtn] = useState("");

	const handleAddBtn = () => {
		if (page === "" || page === "/" || page === "/scrap" || page === "/project") {
			setHideAddBtn(false);
		} else {
			setHideAddBtn(true);
		}
	};

	const handleAddBtnClick = () => {
		setHidePopupScrap((el) => !el);
	};

	const initBackBtnEvent = () => {
		setInitBackBtn(true);
	};

	const hideBackBtnEvent = () => {
		setHideBackBtn(true);
	};

	const showBackBtnEvent = () => {
		setHideBackBtn(false);
	};

	const hideHeaderEvent = () => {
		setHideHeader(true);
	};

	const showHeaderEvent = () => {
		setHideHeader(false);
	};

	const handlePageLocation = () => {
		// change state page
		const { history } = props;

		setPage(window.location.pathname);

		history.listen((location) => {
			handleBackBtnTarget(location.pathname);
			setPage(location.pathname);
		});
	};

	const handleBackBtnTarget = (location) => {
		const page = location.split("/")[1];
		setTargetBackBtn(page);
	};

	const renderBtnAdd = () => {
		if (page === "" || page === "/" || page === "/scrap") {
			return <BtnAdd handleAddBtnClick={handleAddBtnClick} />;
		} else {
			return "";
		}
	};

	const renderPopupScrap = () => {
		return <PopupScrap handleAddBtnClick={handleAddBtnClick} hidePopupScrap={hidePopupScrap} author="MashUp" />;
	};

	const addScrollEvent = () => {
		window.addEventListener("scroll", () => {
			if (didScroll) {
				clearTimeout(didScroll);
			}

			didScroll = setTimeout(() => {
				if (window.location.pathname === "" || window.location.pathname === "/" || window.location.pathname === "/scrap" || window.location.pathname === "/project") {
					// event
					const st = window.pageYOffset || document.documentElement.scrollTop;
					if (st > lastScrollTop) {
						// downscroll code
						setHideHeader(true);
					} else {
						// upscroll code
						setHideHeader(false);
					}
					lastScrollTop = st <= 0 ? 0 : st;
				}
			}, 300);
		});
	};

	useEffect(() => {
		handlePageLocation();
		addScrollEvent();
	}, []);

	// componentWillUnmount() {
	//   unlisten();
	// }

	return (
		<div className="App">
			<Header hideHeader={hideHeader} />

			<Link to={`/${targetBackBtn}`}>
				<BtnBack hideBackBtn={hideBackBtn} hideBackBtnEvent={hideBackBtnEvent} initBackBtn={initBackBtn} />
			</Link>

			{renderBtnAdd()}
			{renderPopupScrap()}

			<div className="App-contents">
				<Switch>
					<Route exact path="/" render={() => <Home showHeaderEvent={showHeaderEvent} hideBackBtn={hideBackBtnEvent} />} />
					<Route exact path="/scrap" render={() => <Scrap showHeaderEvent={showHeaderEvent} />} />
					<Route
						path="/scrap/:id"
						render={({ match, location }) => <Detail match={match} location={location} initBackBtnEvent={initBackBtnEvent} hideHeaderEvent={hideHeaderEvent} showBackBtn={showBackBtnEvent} />}
					/>

					<Route exact path="/project" render={() => <Project showHeaderEvent={showHeaderEvent} />} />
					<Route path="/project/:id" render={({ match, location }) => <Detail match={match} location={location} hideHeaderEvent={hideHeaderEvent} />} />
					<Route render={() => <NotFound />} />
				</Switch>
			</div>

			<Footer />
		</div>
	);
};

export default withRouter(App);
