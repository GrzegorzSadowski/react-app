import React from "react";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import {Routes, Route} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ActiveResult from "./components/ActiveResult/ActiveResult";


function App() {

    return (
        <ErrorBoundary>
            <Routes>
            < Route path="/" element = {<SearchResultsPage/>} />
            < Route path="*" element = {<NotFoundPage/>} />
            < Route path="movies/:id" element = {<ActiveResult/>} />
            </Routes>
        </ErrorBoundary>
        
    );
}
export default App;