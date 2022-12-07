import logo404 from "../../images/logo404.png";
import "./notFoundPageContent.css";
import React from "react";

class NotFoundPageContent extends React.Component {
  render() {
    return (
      <div className="notFoundPageContent">
        <h2>Page not found</h2>
        <img src={logo404} alt="404" className="notFoundPageContent--img" />
        <a href="#" target="blank">
          <button type="button" className="notFoundPageContent--button">
            GO BACK TO HOME
          </button>
        </a>
      </div>
    );
  }
}

export default NotFoundPageContent;
