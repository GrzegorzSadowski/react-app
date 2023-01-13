import React, { useState } from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import SearchResultsContent from "../SearchResultsContent/SearchResultsContent";
import Footer from "../Footer/Footer.jsx";
import "./searchResultsPage.css";

const SearchResultsPage = () => {
  return (
    <div
      className="searchResultsPage--container"
      id="searchResultsPage--container"
    >
      <FindYourMovie />
      <SearchResultsContent />
      <Footer />
    </div>
  );
};
export default SearchResultsPage;
