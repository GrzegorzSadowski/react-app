import React from "react";
import "./FindYourMovie.css";
import Name from "../Name/Name";

const FindYourMovie = () => {
  return (
    <div className="FindYourMovie--container">
      <div className="FindYourMovie--Header">
        <Name />
        <a href="#" target="blank">
          <button type="button" className="FindYourMovie--Button">
            + ADD MOVIE
          </button>
        </a>
      </div>
      <div className="FindYourMovie--Content">
        <p className="FindYourMovie--Paragraph">FIND YOUR MOVIE</p>
        <form className="FindYourMovie--Form">
          <input
            className="FindYourMovie--Placeholder"
            type="text"
            placeholder="What do you want to watch"
          />
          <input
            className="FindYourMovie--Submit"
            type="submit"
            value="SEARCH"
          />
        </form>
      </div>
    </div>
  );
};
export default FindYourMovie;
