import React from "react";

import Card from "./partial/Card";
import Textbox from "./partial/Textbox";
import { Link } from "react-router-dom";

const CardList = (props) => {
	const renderItems = (props) => {
		return props.items.map((el) => {
			return (
				<Link to={{ pathname: `/scrap/${el.id}`, state: { data: el } }} key={el.id}>
					<Card item={el} />
				</Link>
			);
		});
	};

	return (
		<div className="CardList">
			<div className={props.items ? "con-body" : "con-body con-textbox"}>
				{props.type ? <h5>{props.type}</h5> : ""}

				<div className={props.items ? "wrap-card" : "wrap-card wrap-textbox"}>{props.items ? renderItems(props) : <Textbox title="no scrap" />}</div>
			</div>
		</div>
	);
};

export default CardList;
