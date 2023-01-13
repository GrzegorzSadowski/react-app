import React from "react";
import PropTypes from "prop-types";
import "./searchResults.css";
import Dots from "../Dots/Dots";
import { Link } from "react-router-dom";

const SearchResults = (props) => {
  const { item } = props;

  return (
    <div className="searchResults--card">
      <Link to={"/movies/" + item.id}>
        <img src={item.posterPath} className="searchResults--img" alt="" />
      </Link>
      <Dots item={item} />
      <div className="searchResults--description">
        <span className="searchResults--title">{item.title}</span>
        <span className="searchResults--released">
          {item.releaseDate.slice(0, 4)}
        </span>
      </div>
      <p className="searchResults--genre">{item.genres.join(" ")}</p>
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
