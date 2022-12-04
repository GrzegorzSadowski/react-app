import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.css";

const SearchResults = (props) => {
  return (
    <div className="SearchResults--Card">
      <img src={props.img} className="SearchResults--Img" />
      <div className="SearchResults--Description">
        <span className="SearchResults--Title">{props.title}</span>
        <span className="SearchResults--Released">{props.released}</span>
      </div>
      <p className="SearchResults--Genre">{props.genre}</p>
    </div>
  );
};

SearchResults.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  released: PropTypes.string,
  genre: PropTypes.string,
};

export default SearchResults;
