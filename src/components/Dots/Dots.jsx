import React, { useState } from "react";
import "./dots.css";
import dots from "../../images/dots-three-circle-vertical.svg";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import EditMovie from "../EditMovie/EditMovie";

const Dots = (props) => {
  const { item } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleOpenMenuClick = () => {
    setShowDropdown(true);
  };

  const handleCloseMenuClick = () => {
    setShowDropdown(false);
  };

  const handleOpenEditClick = () => {
    setShowDropdown(false);
    setShowDelete(false);
    setShowEdit(true);
  };

  const handleOpenDeleteClick = () => {
    setShowDropdown(false);
    setShowDelete(true);
    setShowEdit(false);
  };

  const handleCloseModalClick = () => {
    setShowDropdown(false);
    setShowDelete(false);
    setShowEdit(false);
  };

  return (
    <div className="dots-container" onMouseLeave={handleCloseMenuClick}>
      <button className="dots-button" onClick={handleOpenMenuClick}>
        <img className="dots-image" src={dots} alt="dots" />
      </button>

      {showDropdown && (
        <ul className="dots-dropdown">
          <button onClick={handleCloseMenuClick} className="dots--button--x">
            &#x2716;
          </button>
          <li>
            <button onClick={handleOpenEditClick}>Edit</button>
          </li>
          <li>
            <button onClick={handleOpenDeleteClick}>Delete</button>
          </li>
        </ul>
      )}

      {showEdit && <EditMovie item={item} onClose={handleCloseModalClick} />}

      {showDelete && (
        <DeleteMovie id={item.id} onClose={handleCloseModalClick} />
      )}
    </div>
  );
};

export default Dots;
