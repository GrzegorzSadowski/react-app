import React from "react";
import Header from "../Header/Header";
import NotFoundPageContent from "../NotFoundPageContent/NotFoundPageContent";
import Footer from "../Footer/Footer.jsx";
import './NotFoundPage.css' 

 const PageNotFound = () => {
    return (
        <div className="container">
            <Header />
            <NotFoundPageContent />
            <Footer />
        </div>
    );
}
export default PageNotFound;