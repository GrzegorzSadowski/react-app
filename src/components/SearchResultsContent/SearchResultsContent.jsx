import React from "react";
import "./searchResultsContent.css";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";
import SearchResults from "../SearchResults/SearchResults";
import dataArray from "../../data";

function SearchResultsContent() {
  const searchResults = dataArray.map((item) => {
    return <SearchResults key={item.id} item={item} />;
  });

  return (
    <div className="searchResultsContent--container">
      <div className="searchResultsContent--navigation">
        <MoviesNavigation />
      </div>
      <h3 className="searchResultsContent--results">32 movies found</h3>
      <div className="searchResultsContent--content">{searchResults}</div>
    </div>
  );
}

export default SearchResultsContent;
