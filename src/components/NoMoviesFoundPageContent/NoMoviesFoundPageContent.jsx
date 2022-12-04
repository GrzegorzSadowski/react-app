import React from "react";
import "./NoMoviesFoundPageContent.css";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";

function NoMoviesFoundPageContent() {
  return (
    <div className="NoMoviesFoundPageContent--Container">
      <MoviesNavigation />
      <div className="NoMoviesFoundPageContent--Content">
        <h1>No Movie Found</h1>
      </div>
    </div>
  );
}

export default NoMoviesFoundPageContent;
