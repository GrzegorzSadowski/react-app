import React from "react";
import "./SearchResultsContent.css";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";
import SearchResults from "../SearchResults/SearchResults";
import dataArray from "../../data";

function SearchResultsContent() {
  const searchResults = dataArray.map((item) => {
    return (
      <SearchResults
        key={item.id}
        img={item.img}
        title={item.title}
        released={item.released}
        genre={item.genre}
      />
    );
  });

  return (
    <div className="SearchResultsContent--Container">
      <div className="SearchResultsContent--Navigation">
        <MoviesNavigation />
      </div>
      <h3 className="SearchResultsContent--Results">32 movies found</h3>
      <div className="SearchResultsContent--Content">{searchResults}</div>
    </div>
  );
}

export default SearchResultsContent;
