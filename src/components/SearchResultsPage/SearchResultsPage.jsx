import React, { useState } from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import SearchResultsContent from "../SearchResultsContent/SearchResultsContent";
import Footer from "../Footer/Footer.jsx";
import ActiveResult from "../ActiveResult/ActiveResult.jsx";
import "./searchResultsPage.css";

import dataArray from "../../data";

const SearchResultsPage = () => {
  const [films, setFilms] = useState(dataArray);
  const [isFilmActive, setIsFilmActive] = useState(false);
  const [activeFilm, setActiveFilm] = useState();
  const len = films[films.length - 1].id;

  return (
    <div
      className="searchResultsPage--container"
      id="searchResultsPage--container"
    >
      {isFilmActive ? (
        <ActiveResult
          setIsFilmActive={setIsFilmActive}
          activeFilm={activeFilm}
        />
      ) : (
        <FindYourMovie films={films} setFilms={setFilms} len={len} />
      )}
      <SearchResultsContent
        films={films}
        setFilms={setFilms}
        setIsFilmActive={setIsFilmActive}
        setActiveFilm={setActiveFilm}
      />
      <Footer />
    </div>
  );
};
export default SearchResultsPage;
