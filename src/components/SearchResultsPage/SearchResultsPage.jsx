import React, { useState } from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import SearchResultsContent from "../SearchResultsContent/SearchResultsContent";
import Footer from "../Footer/Footer.jsx";
import ActiveResult from "../ActiveResult/ActiveResult.jsx";
import "./searchResultsPage.css";

import dataArray from "../../data";

const SearchResultsPage = () => {
  const [films, setFilms] = useState(dataArray);
  const [activeFilm, setActiveFilm] = useState(null);


  const handleSetFilm = film => {
    // it seems that films.length - 1].id + 1 will be films.length if we use id like 1 2 3 ...
    // Probably we can use just films.length. The logic can be changed if id will be smth else but numbers,
    // but in this case logic films[films.length - 1].id + 1 will be also not correct
    const newId = films[films.length - 1].id + 1;
    const addedFilms = films.concat({ ...film , id: newId, key: newId});
    setFilms(addedFilms);
  }

  return (
    <div
      className="searchResultsPage--container"
      id="searchResultsPage--container"
    >
      {activeFilm ? (
        <ActiveResult
          setActiveFilm={setActiveFilm}
          activeFilm={activeFilm}
        />
      ) : (
        <FindYourMovie films={films} setFilms={handleSetFilm}  />
      )}
      <SearchResultsContent
        films={films}
        setFilms={setFilms}
        setActiveFilm={setActiveFilm}
      />
      <Footer />
    </div>
  );
};
export default SearchResultsPage;
