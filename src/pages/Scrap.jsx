import React, { useState, useEffect } from "react";
import { Search, CardList } from "components";
import { fbGetData } from "lib/firebase";
import BtnAdd from "../components/partial/BtnAdd";
import PopupScrap from "../components/PopupScrap";
const COL = "scrapItems";

const Scrap = () => {
	const [term, setTerm] = useState("");
	const [isAddClicked, setIsAddClicked] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		const get = async () => {
			const dataTemp = await fbGetData(COL, "createdAt");
			setData(dataTemp);
		};
		get();
	}, []);

	const onTermChange = (e) => {
		setTerm(e.target.value);
	};

	const handleAddBtnClick = () => {
		setIsAddClicked((n) => !n);
	};

	return (
		<div className="Scrap height-contents">
			<div className="scrap-header contents-header-default">
				<div className="con-body">
					<Search term={term} onChange={onTermChange} />
					<BtnAdd onClick={handleAddBtnClick} />
				</div>
			</div>

			{data ? <CardList items={data} /> : ""}

			<PopupScrap active={isAddClicked} handleAddBtnClick={handleAddBtnClick} />
		</div>
	);
};

export default Scrap;
