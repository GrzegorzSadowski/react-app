import React from "react";
import "./noMoviesFoundPageContent.css";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";

function NoMoviesFoundPageContent() {
  return (
    <div className="noMoviesFoundPageContent--container">
      <MoviesNavigation />
      <div className="noMoviesFoundPageContent--content">
        <h1>No Movie Found</h1>
      </div>
    </div>
  );
}

export default NoMoviesFoundPageContent;
