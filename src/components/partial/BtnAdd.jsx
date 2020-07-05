import React from "react";
const BtnAdd = (props) => {
	return (
		<div className="btn btn-add" onClick={props.onClick}>
			<div className="btn-add-contents">
				<div className="add-v add-line"></div>
				<div className="add-h add-line"></div>
			</div>
		</div>
	);
};

export default BtnAdd;
