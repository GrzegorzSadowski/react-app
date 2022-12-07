import "./footer.css";
import Name from "../Name/Name";
import React from "react";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <Name />
      </footer>
    );
  }
}

export default Footer;
