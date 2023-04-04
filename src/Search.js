import React from "react";
import './Search.css';


const Search = (props) => {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search animal :)"
      onChange={(e) => props.onSearch(e.target.value)}
    ></input>
  );
};
export default Search;