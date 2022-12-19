import "./header.css";
import React, { useState } from "react";
import Name from "../Name/Name";
import AddMovie from "../AddMovie/AddMovie";

const Header = (props) => {
  const { showButton, showMagnifier, films, setFilms, len, setIsFilmActive } =
    props;

  const [showModal, setShowModal] = useState(false);

  const handleOpenModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
  };

  const handleIsFilmActive = () => {
    setIsFilmActive(false);
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

      {showModal && (
        <AddMovie
          onClose={handleCloseModalClick}
          films={films}
          setFilms={setFilms}
          len={len}
        />
      )}
    </header>
  );
};

export default Header;
