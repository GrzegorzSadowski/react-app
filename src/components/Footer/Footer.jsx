import "./Footer.css";
import Name from "../Name/Name";
import React from "react";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="Footer">
        <Name />
      </footer>
    );
  }
}

export default Footer;
