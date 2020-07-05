import React, { useState, useEffect } from "react";
import { Search, CardList } from "components";
import { fbGetData } from "lib/firebase";
import BtnAdd from "../components/partial/BtnAdd";

const Scrap = () => {
	const [term, setTerm] = useState("");
	const onTermChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<div className="Scrap height-contents">
			<div className="scrap-header contents-header-default">
				<div className="con-body">
					<Search term={term} onChange={onTermChange} />
					<BtnAdd />
				</div>
			</div>
			{/* {data ? <CardList items={data} /> : ""} */}
		</div>
	);
};

export default Scrap;
