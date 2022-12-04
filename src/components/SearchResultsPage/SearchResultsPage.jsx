import React from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import SearchResultsContent from "../SearchResultsContent/SearchResultsContent";
import Footer from "../Footer/Footer.jsx";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  return (
    <div className="SearchResultsPage--Container">
      <FindYourMovie />
      <SearchResultsContent />
      <Footer />
    </div>
  );
};
export default SearchResultsPage;
