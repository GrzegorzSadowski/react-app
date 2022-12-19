import React from "react";
import PropTypes from "prop-types";
import "./searchResults.css";
import Dots from "../Dots/Dots";

const SearchResults = (props) => {
  const {
    item,
    /*onChange, onDelete,*/ films,
    setFilms,
    setActiveFilm,
  } = props;

  const handleIsFilmActive = () => {
    setActiveFilm(item);
    console.log(item);
  };

  return (
    <div className="searchResults--card">
      <img
        src={item.img}
        className="searchResults--img"
        alt=""
        onClick={handleIsFilmActive}
      />
      <Dots
        item={item}
        //onChange={onChange}
        //onDelete={onDelete}
        films={films}
        setFilms={setFilms}
      />
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
