import React from "react";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import NoMovieFoundPage from "./components/NoMovieFoundPage/NoMovieFoundPage";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Dots from "./components/Dots/Dots";
import Header from "./components/Header/Header";

function App() {

    return (
        <ErrorBoundary>
            <SearchResultsPage />
        </ErrorBoundary>
    );
}
export default App;