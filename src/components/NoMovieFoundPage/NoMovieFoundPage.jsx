import React from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import NoMoviesFoundPageContent from "../NoMoviesFoundPageContent/NoMoviesFoundPageContent";
import Footer from "../Footer/Footer.jsx";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./noMovieFoundPage.css";

const NoMovieFoundPage = () => {
  return (
    <ErrorBoundary>
      <div className="noMovieFoundPage-container">
        <FindYourMovie />
        <NoMoviesFoundPageContent />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
export default NoMovieFoundPage;
