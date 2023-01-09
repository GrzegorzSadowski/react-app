import React from "react";
import PropTypes from "prop-types";
import "./searchResults.css";
import Dots from "../Dots/Dots";

const SearchResults = (props) => {
  const { item, setActiveFilm } = props;

  const handleIsFilmActive = () => {
    setActiveFilm(item);
    console.log(item);
  };

  return (
    <div className="searchResults--card">
      <img
        src={item.posterPath}
        className="searchResults--img"
        alt=""
        onClick={handleIsFilmActive}
      />
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
