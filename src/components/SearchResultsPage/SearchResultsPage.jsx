import React, {useState} from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import SearchResultsContent from "../SearchResultsContent/SearchResultsContent";
import Footer from "../Footer/Footer.jsx";
import "./searchResultsPage.css";

const SearchResultsPage = () => {
const [isFilmActive, setActiveFilm]= useState(false);
  return (
    <div className="searchResultsPage--container">
        {isFilmActive ? <ActiveResult /> : <FindYourMovie />}
      <SearchResultsContent setActiveFilm={setActiveFilm} />
      <Footer />
    </div>
  );
};
export default SearchResultsPage;
