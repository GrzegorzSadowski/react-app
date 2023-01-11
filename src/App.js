import React from "react";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


function App() {

    return (
        <ErrorBoundary>
            <SearchResultsPage />
        </ErrorBoundary>
    );
}
export default App;