import React from "react";
import "./searchResultsContent.css";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";
import SearchResults from "../SearchResults/SearchResults";
import dataArray from "../../data";

function SearchResultsContent(props) {
  const { films, setFilms, setIsFilmActive, setActiveFilm } = props;

  //const handleChange = (film) => {
  //  const updatedFilms = films.map((filmItem) => {
  //    return film.id === filmItem.id ? film : filmItem;
  //  });
  //  setFilms(updatedFilms);
  //  console.log("updated");
  //};

  //const handleDelete = (id) => {
  //  const deletedFilms = films.filter((film) => film.id !== id);
  //  setFilms(deletedFilms);
  //  console.log("deleted");
  //};

  const searchResults = films.map((item) => {
    return (
      <SearchResults
        key={item.id}
        item={item}
        //onChange={handleChange}
        //onDelete={handleDelete}
        films={films}
        setFilms={setFilms}
        setIsFilmActive={setIsFilmActive}
        setActiveFilm={setActiveFilm}
      />
    );
  });

  return (
    <div className="searchResultsContent--container">
      <div className="searchResultsContent--navigation">
        <MoviesNavigation />
      </div>
      <h3 className="searchResultsContent--results">{films.length}</h3>
      <div className="searchResultsContent--content">{searchResults}</div>
    </div>
  );
}

export default SearchResultsContent;
