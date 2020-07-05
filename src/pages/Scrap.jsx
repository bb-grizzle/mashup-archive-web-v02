import React, { useState, useEffect } from "react";
import { Search, CardList } from "components";
import { fbGetData } from "lib/firebase";

const Scrap = (props) => {
	// const [data, setData] = useState();

	// useEffect(() => {
	// 	const _get = async () => {
	// 		const db = await fbGetData("scrapItems", "createdAt");
	// 		setData(db);
	// 	};
	// 	_get();
	// }, []);

	// useEffect(() => {
	// 	props.showHeaderEvent();
	// }, []);

	return (
		<div className="Scrap size-header">
			Scrap
			{/* <Search /> */}
			{/* {data ? <CardList items={data} /> : ""} */}
		</div>
	);
};

export default Scrap;
