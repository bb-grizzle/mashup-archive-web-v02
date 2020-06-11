import React, { useEffect, useState } from "react";
import { Search, ProjectWrapper } from "components";
import { fbGetData } from "lib/firebase";
const Project = (props) => {
	const [data, setData] = useState();
	useEffect(() => {
		const get = async () => {
			const db = await fbGetData("projects", "created_at");
			setData(db);
		};
		get();
	}, []);

	useEffect(() => {
		props.showHeaderEvent();
	}, []);

	return (
		<div className="Project size-header">
			<Search />
			<ProjectWrapper />
			<ProjectWrapper />
		</div>
	);
};

export default Project;
