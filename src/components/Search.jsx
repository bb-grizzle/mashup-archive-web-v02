import React from "react";
import PropType from "prop-types";
import ic_search from "img/icon_search.svg";

const Search = ({ term, onChange }) => {
	return (
		<div className="Search">
			<div className="container-wrap-search">
				<div className="wrap-search">
					<div className="wrap-search-text">
						<select className="search-dropdown">
							<option value="title">title</option>
							<option value="author">author</option>
							<option value="tag">tag</option>
						</select>
						<input type="text" className="search-text" placeholder="Search" value={term} onChange={onChange} />
					</div>
					<img src={ic_search} alt="search" className="btn-search" />
				</div>
			</div>
		</div>
	);
};

Search.propType = {
	term: PropType.string.isRequired,
	onChange: PropType.func.isRequired
};

export default Search;
