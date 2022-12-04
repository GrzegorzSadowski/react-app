import logo404 from "../../images/logo404.png";
import "./NotFoundPageContent.css";
import React from "react";

class NotFoundPageContent extends React.Component {
  render() {
    return (
      <div className="NotFoundPageContent">
        <h2>Page not found</h2>
        <img src={logo404} alt="404" className="NotFoundPageContent--img" />
        <a href="#" target="blank">
          <button type="button" className="NotFoundPageContent--button">
            GO BACK TO HOME
          </button>
        </a>
      </div>
    );
  }
}

export default NotFoundPageContent;
