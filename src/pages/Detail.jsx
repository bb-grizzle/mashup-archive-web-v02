import React, { useState, useEffect } from "react";
import { DetailThumbnail, DetailContents } from "components";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
	const [data, setData] = useState();
	useEffect(() => {
		setData(props.location.state.data);
	}, [props]);

	useEffect(() => {
		_init();
	}, []);

	const _init = () => {
		props.hideHeaderEvent();
		props.showBackBtn();
		props.initBackBtnEvent();

		scrolltoTop();
	};

	const scrolltoTop = () => {
		window.scrollTo(0, 0);
	};

	const _updateDetail = async () => {};

	const renderDetail = () => {
		return (
			<div>
				<DetailThumbnail thumbnail={data.thumbnail} />
				<DetailContents contents={data} />
			</div>
		);
	};

	return <div className="Detail">{data ? renderDetail() : "Loading"}</div>;
};

export default Detail;
