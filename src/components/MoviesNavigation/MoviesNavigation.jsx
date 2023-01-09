import React, { useState } from "react";
import "./moviesNavigation.css";
import { useDispatch } from "react-redux";
import { sortMovie } from "../../redux/movieSlice";

function MoviesNavigation(props) {
  const { setFilterValue } = props;
  const [buttonsColors, setButtonsColors] = useState([1, 0, 0, 0, 0]);

  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    event.preventDefault();
    dispatch(sortMovie(event.target.value));
  };

  const handleClick = (event) => {
    setFilterValue(event.target.value);
    switch (event.target.value) {
      case "All":
        setButtonsColors([1, 0, 0, 0, 0]);
        break;
      case "Action":
        setButtonsColors([0, 1, 0, 0, 0]);
        break;
      case "Drama":
        setButtonsColors([0, 0, 1, 0, 0]);
        break;
      case "Horror":
        setButtonsColors([0, 0, 0, 1, 0]);
        break;
      case "Crime":
        setButtonsColors([0, 0, 0, 0, 1]);
        break;
    }
  };

  return (
    <div className="moviesNavigation--container">
      <div className="moviesNavigation--navigation">
        <div className="moviesNavigation--filter">
          <button
            className="moviesNavigation--navigation--button "
            value="All"
            onClick={handleClick}
            style={{ color: buttonsColors[0] ? "#f65261" : "#ffffff" }}
          >
            ALL
          </button>
          <button
            className="moviesNavigation--navigation--button"
            value="Action"
            onClick={handleClick}
            style={{ color: buttonsColors[1] ? "#f65261" : "#ffffff" }}
          >
            ACTION
          </button>
          <button
            className="moviesNavigation--navigation--button"
            value="Drama"
            onClick={handleClick}
            style={{ color: buttonsColors[2] ? "#f65261" : "#ffffff" }}
          >
            DRAMA
          </button>
          <button
            className="moviesNavigation--navigation--button"
            value="Horror"
            onClick={handleClick}
            style={{ color: buttonsColors[3] ? "#f65261" : "#ffffff" }}
          >
            HORROR
          </button>
          <button
            className="moviesNavigation--navigation--button"
            value="Crime"
            onClick={handleClick}
            style={{ color: buttonsColors[4] ? "#f65261" : "#ffffff" }}
          >
            CRIME
          </button>
        </div>
        <div className="moviesNavigation--sort">
          <h4 className="moviesNavigation--navigation--text">SORT BY</h4>
          <select
            className="moviesNavigation--navigation--select"
            onChange={handleInputChange}
          >
            <option
              className="moviesNavigation--navigation--option"
              value="releaseDate"
            >
              RELEASE DATE
            </option>
            <option
              className="moviesNavigation--navigation--option"
              value="genres"
            >
              GENRE
            </option>
            <option
              className="moviesNavigation--navigation--option"
              value="title"
            >
              TITLE
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MoviesNavigation;
