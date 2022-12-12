import "./modal.css";
import React from "react";
import AddMovie from "../AddMovie/AddMovie";
import EditMovie from "../EditMovie/EditMovie";
import DeleteMovie from "../DeleteMovie/DeleteMovie";

function Modal({
  handleCloseModalClick,
  showAddMovie,
  showEditMovie,
  showDeleteMovie,
}) {
  return (
    <>
      <div className="modal"></div>
      <div className="modal--container">
        <button onClick={handleCloseModalClick} className="modal--button--x">
          &#x2716;
        </button>
        {showAddMovie && <AddMovie />}
        {showEditMovie && <EditMovie />}
        {showDeleteMovie && <DeleteMovie />}
      </div>
    </>
  );
}
export default Modal;
