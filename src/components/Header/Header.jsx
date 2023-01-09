import "./header.css";
import React, { useState } from "react";
import Name from "../Name/Name";
import AddMovie from "../AddMovie/AddMovie";

const Header = (props) => {
  const { showButton, showMagnifier, setActiveFilm } = props;

  const [showModal, setShowModal] = useState(false);

  const handleOpenModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
  };

  const handleIsFilmActive = () => {
    setActiveFilm(null);
  };

  return (
    <header className="header">
      <Name />
      {showMagnifier && (
        <button onClick={handleIsFilmActive} className="activeResult--button">
          &#x2315;
        </button>
      )}

      {showButton && (
        <button onClick={handleOpenModalClick} className="header--button">
          + ADD MOVIE
        </button>
      )}

      {showModal && <AddMovie onClose={handleCloseModalClick} />}
    </header>
  );
};

export default Header;
