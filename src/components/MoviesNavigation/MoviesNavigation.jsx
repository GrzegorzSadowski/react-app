import React from "react";
import "./moviesNavigation.css";

function MoviesNavigation() {
  return (
    <div className="moviesNavigation--container">
      <div className="moviesNavigation--navigation">
        <div className="moviesNavigation--filter">
          <h4 className="moviesNavigation--navigation--text  red">ALL</h4>
          <h4 className="moviesNavigation--navigation--text">DOCUMENTARY</h4>
          <h4 className="moviesNavigation--navigation--text">COMEDY</h4>
          <h4 className="moviesNavigation--navigation--text">HORROR</h4>
          <h4 className="moviesNavigation--navigation--text">CRIME</h4>
        </div>
        <div className="moviesNavigation--sort">
          <h4 className="moviesNavigation--navigation--text">SORT BY</h4>
          <select className="moviesNavigation--navigation--select">
            <option className="moviesNavigation--navigation--option">
              RELEASE DATE
            </option>
            <option className="moviesNavigation--navigation--option">
              GENRE
            </option>
            <option className="moviesNavigation--navigation--option">
              TITLE
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MoviesNavigation;
