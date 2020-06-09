import React from 'react';
import ic_search from 'img/icon_search.svg';

const Search = () => {
  return (
    <div className = "Search">
      <div className = "con-body">

        <div className = "container-wrap-search">

          <div className = "wrap-search">
            <div className = "wrap-search-text">
              <select className = "search-dropdown">
                <option value="title">title</option>
                <option value="author">author</option>
                <option value="tag">tag</option>
              </select>
              <input type = "text" className = "search-text" placeholder="Search"/>
            </div>
            <img src = {ic_search} alt="search" className = "btn-search" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Search;