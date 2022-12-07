import "./header.css";
import Name from "../Name/Name";

function Header({ showButton }) {
  return (
    <header className="header">
      <Name />
      {showButton && (
        <a href="#" target="blank">
          <button type="button" className="header--button">
            + ADD MOVIE
          </button>
        </a>
      )}
    </header>
  );
}

export default Header;
