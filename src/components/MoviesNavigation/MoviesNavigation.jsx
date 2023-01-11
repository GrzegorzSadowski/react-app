import React, { useState } from "react";
import "./moviesNavigation.css";
import { useDispatch } from "react-redux";
import { sortMovie } from "../../redux/movieSlice";
import classnames from "classnames";

function MoviesNavigation(props) {
  const { setFilterValue } = props;
  const [buttonActiveName, setButtonActiveName] = useState("All");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    event.preventDefault();
    dispatch(sortMovie(event.target.value));
  };

  const handleClick = (event) => {
    setFilterValue(event.target.value);
    setButtonActiveName(event.target.value);
  };

  return (
    <div className="moviesNavigation--container">
      <div className="moviesNavigation--navigation">
        <div className="moviesNavigation--filter">
          <button
            className={classnames("moviesNavigation--navigation--button", {
              "moviesNavigation--navigation--button-active":
                buttonActiveName === "All",
            })}
            value="All"
            onClick={handleClick}
          >
            ALL
          </button>
          <button
            className={classnames("moviesNavigation--navigation--button", {
              "moviesNavigation--navigation--button-active":
                buttonActiveName === "Action",
            })}
            value="Action"
            onClick={handleClick}
          >
            ACTION
          </button>
          <button
            className={classnames("moviesNavigation--navigation--button", {
              "moviesNavigation--navigation--button-active":
                buttonActiveName === "Drama",
            })}
            value="Drama"
            onClick={handleClick}
          >
            DRAMA
          </button>
          <button
            className={classnames("moviesNavigation--navigation--button", {
              "moviesNavigation--navigation--button-active":
                buttonActiveName === "Horror",
            })}
            value="Horror"
            onClick={handleClick}
          >
            HORROR
          </button>
          <button
            className={classnames("moviesNavigation--navigation--button", {
              "moviesNavigation--navigation--button-active":
                buttonActiveName === "Crime",
            })}
            value="Crime"
            onClick={handleClick}
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
