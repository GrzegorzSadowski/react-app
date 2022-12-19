import React from "react";
import "./findYourMovie.css";
import Header from "../Header/Header";

const FindYourMovie = (props) => {
  const { films, setFilms, len } = props;

  return (
    <div className="findYourMovie--container" id="findYourMovie--container">
      <Header showButton={true} films={films} setFilms={setFilms} len={len} />

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
