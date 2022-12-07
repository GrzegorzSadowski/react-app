import React from "react";
import Header from "../Header/Header";
import NotFoundPageContent from "../NotFoundPageContent/NotFoundPageContent";
import Footer from "../Footer/Footer.jsx";
import "./notFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage--container">
      <Header showButton={false} />
      <NotFoundPageContent />
      <Footer />
    </div>
  );
};
export default NotFoundPage;
