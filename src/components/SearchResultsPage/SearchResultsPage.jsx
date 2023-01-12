import React, { useState } from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import SearchResultsContent from "../SearchResultsContent/SearchResultsContent";
import Footer from "../Footer/Footer.jsx";
import ActiveResult from "../ActiveResult/ActiveResult.jsx";
import "./searchResultsPage.css";

const SearchResultsPage = () => {
  const [activeFilm, setActiveFilm] = useState(null);

  return (
    <div
      className="searchResultsPage--container"
      id="searchResultsPage--container"
    >
      <FindYourMovie />

      <SearchResultsContent setActiveFilm={setActiveFilm} />
      <Footer />
    </div>
  );
};
export default SearchResultsPage;
