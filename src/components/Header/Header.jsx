import "./header.css";
import React, { useState } from "react";
import Name from "../Name/Name";
import AddMovie from "../AddMovie/AddMovie";

const Header = (props) => {
  const { showButton } = props;

  const [showModal, setShowModal] = useState(false);

  const handleOpenModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModalClick = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <Name />
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
