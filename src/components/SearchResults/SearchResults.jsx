import React from "react";
import PropTypes from "prop-types";
import "./searchResults.css";
import Dots from "../Dots/Dots";

const SearchResults = (props) => {
  const { item } = props;
  return (
    <div className="searchResults--card">
      <img src={item.img} className="searchResults--img" />
      <Dots />
      <div className="searchResults--description">
        <span className="searchResults--title">{item.title}</span>
        <span className="searchResults--released">{item.released}</span>
      </div>
      <p className="searchResults--genre">{item.genre}</p>
    </div>
  );
};

SearchResults.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    released: PropTypes.string,
    genre: PropTypes.string,
  }),
};

export default SearchResults;
