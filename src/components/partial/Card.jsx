import React from "react";
const Card = (props) => {
	const card_style = {
		backgroundImage: props.item.thumbnail ? `url(${props.item.thumbnail})` : ""
	};

	return (
		<div className={`Card ${props.item.type}`}>
			<div className="wrap">
				<div className="contents" style={card_style}>
					<div className="wrap-tag">
						<ul>
							{props.item.tag.map((tag) => {
								return <li key={`${props.item.id}-${tag}`}>{tag}</li>;
							})}
						</ul>
					</div>

					<div className="wrap-text">
						<p className="card-title">{props.item.title}</p>
						<p className="card-descript">{props.item.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
