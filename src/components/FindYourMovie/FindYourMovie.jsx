import React from "react";
import "./findYourMovie.css";
import Name from "../Name/Name";
import Header from "../Header/Header";

const FindYourMovie = () => {
  return (
    <div className="findYourMovie--container">
      <Header showButton={true} />

      <div className="findYourMovie--content">
        <p className="findYourMovie--paragraph">FIND YOUR MOVIE</p>
        <form className="findYourMovie--form">
          <input
            className="findYourMovie--placeholder"
            type="text"
            placeholder="What do you want to watch"
          />
          <button className="findYourMovie--button">SEARCH</button>
        </form>
      </div>
    </div>
  );
};
export default FindYourMovie;
