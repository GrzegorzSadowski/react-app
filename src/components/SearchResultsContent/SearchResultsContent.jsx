import React, { useState } from "react";
import "./searchResultsContent.css";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";
import SearchResults from "../SearchResults/SearchResults";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../redux/movieSlice";
import { selectAllMovies } from "../../redux/movieSlice";

function SearchResultsContent(props) {
  const [filterValue, setFilterValue] = useState("All");
  const { setActiveFilm } = props;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies());
  }, []);

  const movies = useSelector(selectAllMovies);

  const filter = (movies, filterValue) => {
    return filterValue === "All"
      ? movies
      : movies.filter((mov) => mov.genres.includes(filterValue));
  };
  const moviesFiltered = filter(movies, filterValue);

  const searchResults = moviesFiltered.map((item) => {
    return (
      <SearchResults key={item.id} item={item} setActiveFilm={setActiveFilm} />
    );
  });

  return (
    <div className="searchResultsContent--container">
      <div className="searchResultsContent--navigation">
        <MoviesNavigation setFilterValue={setFilterValue} />
      </div>
      <h3 className="searchResultsContent--results">{moviesFiltered.length}</h3>
      <div className="searchResultsContent--content">{searchResults}</div>
    </div>
  );
}

export default SearchResultsContent;
