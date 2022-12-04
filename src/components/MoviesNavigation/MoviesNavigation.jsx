import React from "react";
import "./MoviesNavigation.css";

function MoviesNavigation() {
  return (
    <div className="MoviesNavigation--Container">
      <div className="MoviesNavigation--Navigation">
        <div className="MoviesNavigation--Filter">
          <h4 className="MoviesNavigation--Navigation--Text  Red">ALL</h4>
          <h4 className="MoviesNavigation--Navigation--Text">DOCUMENTARY</h4>
          <h4 className="MoviesNavigation--Navigation--Text">COMEDY</h4>
          <h4 className="MoviesNavigation--Navigation--Text">HORROR</h4>
          <h4 className="MoviesNavigation--Navigation--Text">CRIME</h4>
        </div>
        <div className="MoviesNavigation--Sort">
          <h4 className="MoviesNavigation--Navigation--Text">SORT BY</h4>
          <h4 className="MoviesNavigation--Navigation--Text">RELEASE DATE </h4>
          <div className="Triangle"></div>
        </div>
      </div>
    </div>
  );
}

export default MoviesNavigation;
