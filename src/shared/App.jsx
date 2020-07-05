import React, { useState, createContext, useEffect } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { Header, Footer, BtnBack, BtnAdd, PopupScrap } from "components";
import { Scrap, Project, Detail, NotFound, Signin } from "pages";
import useSize from "../Hooks/useSize";
import { breakPoint } from "../Utilites";

export const AppContext = createContext();

const App = () => {
	const [nowMedia, setNowMedia] = useState();
	const size = useSize();
	const [user, setUser] = useState({
		name: "taewoong",
		team: "design"
	});

	useEffect(() => {
		if (size[0] <= breakPoint.md) {
			setNowMedia(breakPoint.md);
		} else {
			setNowMedia(null);
		}
	}, [size]);

	return (
		<div className="App">
			<AppContext.Provider value={{ user, nowMedia }}>
				<Header />
				<Switch>
					<Route exact path="/" component={Scrap} />
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/project" component={Project} />

					<Route path="/scrap/:id" component={Detail} />
					<Route path="/project/:id" component={Detail} />
					<Route component={NotFound} />
				</Switch>
			</AppContext.Provider>
		</div>
	);
};

export default withRouter(App);
