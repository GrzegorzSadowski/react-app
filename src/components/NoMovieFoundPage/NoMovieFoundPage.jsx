import React from "react";
import FindYourMovie from "../FindYourMovie/FindYourMovie";
import NoMoviesFoundPageContent from "../NoMoviesFoundPageContent/NoMoviesFoundPageContent";
import Footer from "../Footer/Footer.jsx";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./NoMovieFoundPage.css";

const NoMovieFoundPage = () => {
  return (
    <ErrorBoundary>
      <div className="NoMovieFoundPage-Container">
        <FindYourMovie />
        <NoMoviesFoundPageContent />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
export default NoMovieFoundPage;
