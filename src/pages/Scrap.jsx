import React, { useState, useEffect } from "react";
import { Search, CardList } from "components";
import { fbGetData } from "lib/firebase";

const Scrap = (props) => {
	const [data, setData] = useState();
	const [scrapCount, setScrapCount] = useState(0);

	useEffect(() => {
		const _get = async () => {
			const db = await fbGetData("scrapItems", "created_at");
			setData(db);
		};
		_get();
	}, []);

	useEffect(() => {
		props.showHeaderEvent();
	}, []);

	return (
		<div className="Scrap size-header">
			<Search />
			{data ? <CardList items={data} /> : ""}
		</div>
	);
};

export default Scrap;
